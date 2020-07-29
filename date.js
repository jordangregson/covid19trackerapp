var today = new Date();

var date = today.getDate();
var numDayOfWeek = today.getDay();
var numMonth = today.getMonth();
var year = today.getFullYear();

var dayOfWeek;
var month;

//Setting the number of the day throughout the week to the corresponding day

if(numDayOfWeek == 0) {
    dayOfWeek = "Sunday";
}

else if(numDayOfWeek == 1) {
    dayOfWeek = "Monday";
}

else if(numDayOfWeek == 2) {
    dayOfWeek = "Tuesday";
}

else if(numDayOfWeek == 3) {
    dayOfWeek = "Wednesday";
}

else if(numDayOfWeek == 4) {
    dayOfWeek = "Thursday";
}

else if(numDayOfWeek == 5) {
    dayOfWeek = "Friday";
}

else if(numDayOfWeek == 6) {
    dayOfWeek = "Saturday";
}

//Setting the number of month to the corresponding month

if(numMonth == 0) {
    month = "January";
}

else if(numMonth == 1) {
    month = "February";
}

else if(numMonth == 2) {
    month = "March";
}

else if(numMonth == 3) {
    month = "April";
}

else if(numMonth == 4) {
    month = "May";
}

else if(numMonth == 5) {
    month = "June";
}

else if(numMonth == 6) {
    month = "July";
}

else if(numMonth == 7) {
    month = "August";
}

else if(numMonth == 8) {
    month = "September";
}

else if(numMonth == 9) {
    month = "October";
}

else if(numMonth == 10) {
    month = "November";
}

else if(numMonth == 11) {
    month = "December";
}

var elFullDate = document.getElementById("date");

elFullDate.textContent = dayOfWeek + " " + month + " " + date + ", " + year;