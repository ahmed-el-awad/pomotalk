import { useEffect, useRef, useState } from "react";
import { convertSecondsToMinutes, decrementCounter } from "../helpers/dates";
import { differenceInSeconds, format } from "date-fns";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";

function TimerInput({ type }: { type: "focus" | "break" }) {
  const [minutesInput, setMinutesInput] = useState(0);

  function handleTimerInputChange(value: HTMLInputElement["value"]) {
    const input = Number(value);

    if (value.length === 0) {
      setMinutesInput(0);
    }

    if (input > 60) {
      setMinutesInput(60);
    }

    if (input >= 0 && input <= 60) {
      setMinutesInput(input);
    }
  }

  return (
    <div className="bg-temp-3 grid grid-cols-2 items-center rounded-full px-1.5 py-1">
      <p className="pl-2 text-left">{type === "focus" ? "Focus" : "Break"}</p>
      <Input
        id={type}
        value={minutesInput}
        onChange={({ target: { value } }) => handleTimerInputChange(value)}
        autoFocus
        className="ml-5 w-15"
      />
    </div>
  );
}

export default function Alarm() {
  const [countdownTimer, setCountdownTimer] = useState<string | null>(null);
  const [timeDiffInSeconds, setTimeDiffInSeconds] = useState(0);
  const isMounted = useRef(false);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  function toggleTimer() {
    setIsTimerRunning(!isTimerRunning);
  }

  function startCountdown() {
    let date = new Date();

    let dateAfterTimeAdded = new Date(date.getTime());
    // dateAfterTimeAdded.setMinutes(
    //   dateAfterTimeAdded.getMinutes() + minutesInput
    // );

    // the time showing when the timer will end
    const endingTime = format(dateAfterTimeAdded, "h:mm aaa");
    console.log(endingTime);

    setTimeDiffInSeconds(differenceInSeconds(dateAfterTimeAdded, date));
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    if (countdownTimer === "time's up!") {
      // TODO: play a sound for the timer ending
      return;
    }

    console.log("DEBUG: time diff in seconds:", timeDiffInSeconds);

    // TODO: if the person is a host, let the host's client send a
    // message to the ws server of the time to count down from.
    // that would be broadcasted to every connected client so each of
    // the clients would count down on their own

    const interval = setInterval(() => {
      setCountdownTimer(
        decrementCounter(convertSecondsToMinutes(timeDiffInSeconds))
      );
      setTimeDiffInSeconds(timeDiffInSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeDiffInSeconds]);

  return (
    <>
      <div className="mx-20 text-center text-2xl">
        <section id="controls" className="flex flex-col items-center self-end">
          <section id="focus-break-controls" className="flex">
            <div className="grid grid-cols-2 items-center justify-between gap-x-2">
              <TimerInput type="focus" />
              <TimerInput type="break" />
            </div>
          </section>
          <section
            id="start-stop-controls"
            className="bg-temp-3 mt-2 flex items-center rounded-full p-2"
          >
            <Button
              id="start-button"
              onClick={() => {
                startCountdown();
                toggleTimer();
              }}
              variant="secondary"
              size="icon-lg"
            >
              {isTimerRunning ? <Pause /> : <Play />}
            </Button>
            <p
              className={`bg-temp-1 ml-3 rounded-full px-3 py-2 text-center text-4xl`}
            >
              Time&nbsp;remaining:&nbsp;<span>20:20</span>
            </p>
          </section>
        </section>
      </div>
    </>
  );
}
