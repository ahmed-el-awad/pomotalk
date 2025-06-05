import React, { KeyboardEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./alarm.module.css";
import { addSeconds, differenceInSeconds, format } from "date-fns";

export default function AlarmPage() {
  const [minutesDOM, setMinutesDOM] = useState<number>(0);
  const [secondsDOM, setSecondsDOM] = useState<number>(0);
  const [timeDOM, setTimeDOM] = useState<string | null>(null);
  const [dateDOM, setDateDOM] = useState<string | null>(null);

  function startCountdown() {
    let minutes = parseInt((document.querySelector("#minutes") as HTMLInputElement).value);
    let seconds = parseInt((document.querySelector("#seconds") as HTMLInputElement).value);

    let date = new Date();

    let dateAfterTimeAdded = new Date(date.getTime());
    dateAfterTimeAdded.setSeconds(dateAfterTimeAdded.getSeconds() + seconds);
    dateAfterTimeAdded.setMinutes(dateAfterTimeAdded.getMinutes() + minutes);

    // TODO: replace this var name to "formattedTime" after everything works correctly
    //       the string param should also be changed to "mm:ss aaa"

    // the time showing when the timer will end
    const formattedDate = format(dateAfterTimeAdded, "d MMM h:mm:ss aaa");
    console.log(formattedDate);

    setDateDOM(formattedDate);

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

            <p>:</p>

            <input
              id="seconds"
              type="number"
              max="59"
              min="0"
              value={secondsDOM}
              onChange={({ target: { value } }) => setSecondsDOM(Number(value))}
            />
          </div>
          <button id="startBtn" onClick={() => startCountdown()}>
            Start
          </button>

          <p id="time">{timeDOM}</p>
          <p id="newDate">{dateDOM}</p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}
