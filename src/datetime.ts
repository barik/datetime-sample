import dayjs from "dayjs";
import moment from "moment";

// Try: moment.format("Tuesday")
moment().format();

// Nested within a function.
console.log(moment().format());

// You can hover over the format string.
moment().format("MMMM Do YYYY, h:mm:ss a");

// Try: now.format("January 2021")
let now = moment();
now.format("");

// Try: dayjs().format("Mon")
dayjs().format();
