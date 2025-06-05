import React, { KeyboardEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./alarm.module.css";
import { addSeconds, differenceInSeconds, format } from "date-fns";

export default function AlarmPage() {
  const [minutesDOM, setMinutesDOM] = useState<number>(0);
  const [timeDOM, setTimeDOM] = useState<string | null>(null);

  function startCountdown() {
    let minutes = parseInt((document.querySelector("#minutes") as HTMLInputElement).value);

    let date = new Date();

    let dateAfterTimeAdded = new Date(date.getTime());
    dateAfterTimeAdded.setMinutes(dateAfterTimeAdded.getMinutes() + minutes);

    // the time showing when the timer will end
    const formattedTime = format(dateAfterTimeAdded, "h:mm aaa");
    console.log(formattedTime);

    setTimeDOM(formattedTime);

    const timeDiffInSeconds = differenceInSeconds(dateAfterTimeAdded, date);

    console.log("the seconds diff is ", timeDiffInSeconds);
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
              value={minutesDOM}
              onChange={({ target: { value } }) => setMinutesDOM(Number(value))}
            />
          </div>
          <button id="startBtn" onClick={() => startCountdown()}>
            Start
          </button>

          <p id="time">{timeDOM}</p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}
