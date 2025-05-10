import { getHours, getMinutes, getSeconds } from "date-fns";
const today = new Date();

const h = getHours(today);
const m = getMinutes(today);
const s = getSeconds(today);

console.log(`${h}:${m}:${s}`);
