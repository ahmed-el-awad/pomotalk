import React, { KeyboardEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { makeMinutesZero, startCountdown, validateMinutesTime } from "../helpers/dates";
import styles from "./alarm.module.css";

export default function AlarmPage() {
  const [minutes, setMinutes] = useState(0);

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
              value="0"
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

          <p id="time"></p>
          <p id="newDate"></p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
    </React.Fragment>
  );
}
