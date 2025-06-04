import React, { KeyboardEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./alarm.module.css";
import { format } from "date-fns";

export default function AlarmPage() {
  const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  function startCountdown() {
    let minutes = parseInt((document.querySelector("#minutes") as HTMLInputElement).value);
    let seconds = parseInt((document.querySelector("#seconds") as HTMLInputElement).value);

    let date = new Date();

    date.setSeconds(date.getSeconds() + seconds);
    date.setMinutes(date.getMinutes() + minutes);

    const formattedDate = format(date, "d MMM mm:ss aaa");

    setDate(formattedDate);

    setInterval(() => {
      setTime(minutes + ":" + seconds);

      console.log(minutes + ":" + seconds);
    }, 1000);
  }

  const minutePressed = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

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
              value={minutes}
              // onClick={select}
              onChange={({ target: { value } }) => setMinutes(Number(value))}
              // onBlur={makeMinutesZero}
            />

            <p>:</p>

            <input
              id="seconds"
              type="number"
              max="59"
              min="0"
              value="0"
              onChange={({ target: { value } }) => setMinutes(Number(value))}
              // onkeydown="validateSecondsTime(this)"
              // onblur="makeSecondsZero(this)"
            />
          </div>
          <button id="startBtn" onClick={() => startCountdown()}>
            Start
          </button>

          <p id="time">{time}</p>
          <p id="newDate">{date}</p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}
