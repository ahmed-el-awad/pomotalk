const rejectedSymbols = ["-", "+", "e", "E", "."];

function setMinutesValue(val: string | number) {
  (document.querySelector("#minutes") as HTMLInputElement).value = val.toString();
}

function setSecondsValue(val: string | number) {
  (document.querySelector("#seconds") as HTMLInputElement).value = val.toString();
}

function validateMinutesTime(minHTML: HTMLInputElement) {
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
function validateSecondsTime(secHTML: HTMLInputElement) {
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

function makeMinutesZero(minHTML: HTMLInputElement) {
  const minutes = minHTML.value;

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

function makeSecondsZero(secHTML: HTMLInputElement) {
  const seconds = secHTML.value;

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

function startCountdown() {
  let minutes = parseInt((document.querySelector("#minutes") as HTMLInputElement).value);
  let seconds = parseInt((document.querySelector("#seconds") as HTMLInputElement).value);

  setInterval(() => {
    (document.querySelector("#time") as HTMLInputElement).innerHTML = minutes + ":" + seconds;

    console.log(minutes + ":" + seconds);
  }, 1000);
}
