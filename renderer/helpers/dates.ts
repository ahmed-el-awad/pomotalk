import { FocusEvent } from "react";

const rejectedSymbols = ["-", "+", "e", "E", "."];

function setMinutesValue(val: string | number) {
  (document.querySelector("#minutes") as HTMLInputElement).value =
    val.toString();
}

function setSecondsValue(val: string | number) {
  (document.querySelector("#seconds") as HTMLInputElement).value =
    val.toString();
}

export function validateMinutesTime(minHTML: HTMLInputElement) {
  const minutes = minHTML.value;

  // remove all rejected symbols from the string
  const filteredValue = minutes
    .split("")
    .filter((char) => !rejectedSymbols.includes(char))
    .join("");

  console.log(filteredValue);

  if (filteredValue.length > 2) {
    setMinutesValue(filteredValue.slice(0, -1));
  } else {
    setMinutesValue(filteredValue);
  }
}

export function validateSecondsTime(secHTML: HTMLInputElement) {
  const seconds = secHTML.value;

  // remove all rejected symbols from the string
  const filteredValue = seconds
    .split("")
    .filter((char) => !rejectedSymbols.includes(char))
    .join("");

  console.log(filteredValue);

  if (filteredValue.length > 2) {
    setSecondsValue(filteredValue.slice(0, -1));
  } else {
    setSecondsValue(filteredValue);
  }
}

export function makeMinutesZero(event: FocusEvent<HTMLInputElement, Element>) {
  const minutes = event.target.value;

  if (minutes.length == 0) {
    setMinutesValue(0);
  }

  // if there's multiple 0s, just have a single 0
  if (minutes.split("").every((n) => n == "0")) {
    setMinutesValue(0);
  }

  if (parseInt(minutes) > 59) {
    setMinutesValue(59);
  }
}

export function makeSecondsZero(event: FocusEvent<HTMLInputElement, Element>) {
  const seconds = event.target.value;

  if (seconds.length == 0) {
    setSecondsValue(0);
  }

  // if there's multiple 0s, just have a single 0
  if (seconds.split("").every((n) => n == "0")) {
    setSecondsValue(0);
  }

  if (parseInt(seconds) > 59) {
    setSecondsValue(59);
  }
}

export function convertSecondsToMinutes(seconds: number): string {
  if (seconds > 3599) {
    return "59:59";
  }

  const mm = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return `${mm}:${ss}`;
}

export function decrementCounter(timer: string): string {
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

(window as any).validateMinutesTime = validateMinutesTime;
(window as any).validateSecondsTime = validateSecondsTime;
(window as any).makeMinutesZero = makeMinutesZero;
(window as any).makeSecondsZero = makeSecondsZero;
