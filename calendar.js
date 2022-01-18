//Set year and month of calendar

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("month").innerHTML =  month[new Date().getMonth()];

document.getElementById("year").innerHTML = new Date().getFullYear();

// Build an array with correct amount of 
// empty elements (days of previous month) and dates  
const monthArray = [];
const firstDay = firstDayOfMonth(new Date().getMonth(), new Date().getFullYear());
const numberOfDays = daysInMonth(new Date().getMonth(), new Date().getFullYear());

for (let i = 0; i <= 42; i++) {

    if (i < firstDay) {
        monthArray[i] = ".";
    }

    if (i >= firstDay && i <= firstDay + numberOfDays) {
        monthArray[i] = i - firstDay + 1;
    }
    
    if (i > firstDay + numberOfDays && i < 42) {
        monthArray[i] = '.';
    }
}

//Build HTML list using above array of days
let listOfDates = "";

monthArray.forEach(date => {
    // Add CSS class "today" for today's date
    if (date == new Date().getDate()) {
        listOfDates += "<li class=\"today\">" + date + "</li>"
    } 
    else
        listOfDates += "<li>" + date + "</li>";
});

document.getElementById("dates").innerHTML = listOfDates;


function daysInMonth(month, year) {
    // Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
    // but by using 0 as the day it will give us the last day of the prior
    // month. So passing in 1 as the month number will return the last day
    // of January, not February
    var days = new Date(year, month, 0).getDate();
    return days;
} 

function firstDayOfMonth(month, year) {
    // Month is 0-indexed, Year and day 1-indexed
    var firstDay = new Date(year, month , 1).getDay();

    if (firstDay == 0)
        firstDay = 6;
    else
        firstDay = firstDay - 1;

    return firstDay;
}