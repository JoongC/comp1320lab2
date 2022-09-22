// a)
const getDayOfTheWeek = require ("./lab-two.js").getDayOfTheWeek;
const makeCalendar = require ("./lab-two.js").makeCalendar
const readline = require ("readline-sync");
// b)
makeCalendar();

// c)
const userDate = {
    getDayOfTheWeekForUserDate() {
        const month =readline.question("enter a month (ex: September) ");
        const date =readline.question("enter a date ");
        const year =readline.question("enter a year ");
        console.log(getDayOfTheWeek(Number(year), month, Number(date)));
    }
}


 
 userDate.getDayOfTheWeekForUserDate();
 