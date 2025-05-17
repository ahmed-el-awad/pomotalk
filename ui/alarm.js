const rejectedSymbols = ["-", "+", "e", "E", "."];

function setMinutesValue(val) {
  document.querySelector("#minutes").value = val;
}

function setSecondsValue(val) {
  document.querySelector("#seconds").value = val;
}

function validateMinutesTime(minHTML) {
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

function validateSecondsTime(secHTML) {
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

function makeMinutesZero(minHTML) {
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

function makeSecondsZero(secHTML) {
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
  let minutes = parseInt(document.querySelector("#minutes").value);
  let seconds = parseInt(document.querySelector("#seconds").value);

  setInterval(() => {
    document.querySelector("#time").innerHTML = minutes + ":" + seconds;

    console.log(minutes + ":" + seconds);
  }, 1000);
}
