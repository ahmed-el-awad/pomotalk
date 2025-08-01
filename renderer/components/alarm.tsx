import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { differenceInSeconds, format } from "date-fns";
import { Button } from "@heroui/button";

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

    console.log("time diff in seconds:", timeDiffInSeconds);

    const interval = setInterval(() => {
      setCountdownTimer(
        decrementCounter(convertSecondsToMinutes(timeDiffInSeconds))
      );
      setTimeDiffInSeconds(timeDiffInSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeDiffInSeconds]);

  function convertSecondsToMinutes(seconds: number): string {
    if (seconds > 3599) {
      return "59:59";
    }

    const mm = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const ss = (seconds % 60).toString().padStart(2, "0");

    return `${mm}:${ss}`;
  }

  function decrementCounter(timer: string): string {
    let [mins, secs] = timer.split(":").map((str) => parseInt(str));

    if (mins === 0 && secs === 0) {
      return `time's up!`;
    }

    if (secs === 0) {
      if (mins > 0) {
        mins -= 1;
        secs = 59;
      }
    } else {
      secs -= 1;
    }

    const paddedMins = mins.toString().padStart(2, "0");
    const paddedSecs = secs.toString().padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
  }

  function startCountdown() {
    let date = new Date();

    let dateAfterTimeAdded = new Date(date.getTime());
    dateAfterTimeAdded.setMinutes(
      dateAfterTimeAdded.getMinutes() + minutesInput
    );

    // the time showing when the timer will end
    const endingTime = format(dateAfterTimeAdded, "h:mm aaa");
    console.log(endingTime);

    setEndingTimeDOM(endingTime);

    setTimeDiffInSeconds(differenceInSeconds(dateAfterTimeAdded, date));
  }

  return (
    <React.Fragment>
      <Head>
        <title>Alarm</title>
      </Head>
      <div className="grid-col-1 grid w-full text-center text-2xl">
        <div id="center-clock">
          <div id="container">
            <input
              id="minutes"
              type="number"
              max="59"
              min="0"
              placeholder="0"
              value={minutesInput}
              onChange={({ target: { value } }) =>
                setMinutesInput(Number(value))
              }
            />
          </div>
          <Button
            color="primary"
            id="startBtn"
            onPress={() => startCountdown()}
          >
            Start
          </Button>

          <p id="time">{endingTimeDOM}</p>
          <p>{countdownTimer}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
