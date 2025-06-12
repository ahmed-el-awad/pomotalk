import React, { KeyboardEvent, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./alarm.module.css";
import { addSeconds, differenceInSeconds, format, subSeconds } from "date-fns";

export default function AlarmPage() {
  const [minutesInput, setMinutesInput] = useState<number>(0);
  const [countdownTimer, setCountdownTimer] = useState<string | null>(null);
  const [endingTimeDOM, setEndingTimeDOM] = useState<string | null>(null);
  const [timeDiffInSeconds, setTimeDiffInSeconds] = useState(null);

  useEffect(() => {
    console.log("useeffect time diff in seconds:", timeDiffInSeconds);
  }, [timeDiffInSeconds]);

  function startCountdown() {
    let date = new Date();

    let dateAfterTimeAdded = new Date(date.getTime());
    dateAfterTimeAdded.setMinutes(dateAfterTimeAdded.getMinutes() + minutesInput);

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
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div id="center-clock">
          <div id="container">
            <input
              id="minutes"
              type="number"
              max="59"
              min="0"
              placeholder="0"
              value={minutesInput}
              onChange={({ target: { value } }) => setMinutesInput(Number(value))}
            />
          </div>
          <button id="startBtn" onClick={() => startCountdown()}>
            Start
          </button>

          <p id="time">{endingTimeDOM}</p>
          {/* <p>{timer.getTimeValues().toString()}</p> */}
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}
