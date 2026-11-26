import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { differenceInSeconds, format } from "date-fns";
import { Button } from "@heroui/react";

export default function Alarm() {
  const [countdownTimer, setCountdownTimer] = useState<string | null>(null);
  const [minutesInput, setMinutesInput] = useState<number>(0);
  const [endingTimeDOM, setEndingTimeDOM] = useState<string | null>(null);
  const [timeDiffInSeconds, setTimeDiffInSeconds] = useState(null);
  const isMounted = useRef(false);

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
    <React.Fragment>
      <Head>
        <title>Alarm</title>
      </Head>
      <div className="flex flex-col text-center text-2xl">
        <div id="center-clock" className="flex *:m-4 *:bg-red-400">
          <h1>Pomodoro</h1>
          <input
            id="minutes"
            type="number"
            max="59"
            min="0"
            placeholder="0"
            value={minutesInput}
            onChange={({ target: { value } }) => setMinutesInput(Number(value))}
          />

          <h1>Break</h1>

          <Button
            color="primary"
            id="startBtn"
            onPress={() => startCountdown()}
          >
            Start
          </Button>

          <div>
            <p>{countdownTimer}</p>
            <p id="time">{endingTimeDOM}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
