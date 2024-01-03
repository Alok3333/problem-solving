// Check Leap Year

function checkLeapYear(year) {
    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        return "Who born 28 Feb, so congratulation This year for your celebration because this is a LEAP YEAR.";
    } else {
        return "COMMON YEAR";
    }
}

let ans = checkLeapYear(2024);
console.log(ans);