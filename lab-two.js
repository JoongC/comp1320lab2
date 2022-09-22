const weekCode = {
    0: "saturday",
    1: "sunday", 
    2: "monday", 
    3: "tuesday",
    4: "wednesday",
    5: "thursday",
    6: "friday"
}


const monthCode = {
        "January":1,
        "February":4,
        "March":4,
        "April":0,
        "May":2,
        "June":5,
        "July":0,
        "August":3,
        "September":6,
        "October":1,
        "November":4,
        "December":6

}

function getDayOfTheWeek(year, month, date){
    const twoDigits = year % 100;

    // step1
    const division = Math.floor(twoDigits/12);

    // step2
    const remainder = twoDigits%12;

    // step3
    const remainder2 = Math.floor(remainder/4);

    // step4
    const numberDay = date;

    // step5
    const numberMonth = monthCode[month];



    // step 6
     let add = (division + remainder + remainder2 + numberDay + numberMonth);

    /** 1. 윤년이고 1월2월 일 때
     *  2. add -1
     */ 

    // 1. 윤년이고 1월2월 일 때
    if(isLeapYear(year) && isJanOrFeb(month)) {
        // 2. add -1 
        add = add - 1;
    }

    //step 7. 1600-2100 연대별로 수를 더해준다.
    if (year >= 1600 && year < 1700) {
        add = add + 6;
    } else if (year >= 1700 && year < 1800) {
        add = add + 4;
    } else if (year >= 1800 && year < 1900) {
        add = add + 2;
    } else if (year >= 2000 && year < 2100) {
        add = add + 6;
    } else if (year >= 2100 && year < 2200) {
        add = add + 4;
    }

    const finalCalc = add % 7;
    const week = weekCode[finalCalc];
    return week;
};

function isLeapYear(year){
    if (year % 4 != 0){
        return false;
    } else if (year % 100 != 0){
        return true;
    } else if (year % 400 != 0){
        return false;
    } else {
        return true;
    }
}

function isJanOrFeb(month){
    if (month == "January"||month == "February"){
        return true;
    }
    return false;
}


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]// i = 0
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 12 numbers

function makeCalendar(){
    for (let i = 0; i < monthDays.length; i++) {
        for (let j = 1; j <= monthDays[i]; j++) {
            console.log(`${i+1}-${j}-2022 ${getDayOfTheWeek("2022", months[i], j)}`); 
        }
      
    }
}



module.exports = {getDayOfTheWeek, makeCalendar};