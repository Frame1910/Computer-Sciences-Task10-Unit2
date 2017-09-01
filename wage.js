var payRate = 23;
function manager() {
    if (document.getElementById("position").checked === true) {
        window.payRate = 30;
    } else {
        window.payRate = 23;
    }
}

var normalPay = 0;
var normalHours = 0;
function normalSalary() {
    console.log(payRate);
    var normalHours = document.getElementById("normalHoursTotal").value;
    var normalPay = normalHours * payRate;
    document.getElementById("normalPay").innerHTML = "$" + normalPay;
}

var checkedValue = 0;
function daysWorked(dayNumber) {
    if (document.getElementById(dayNumber.toString()).checked === true) {
        checkedValue = checkedValue + 1;
    } else {
        checkedValue = checkedValue - 1;
    }
    document.getElementById('totalDaysWorked').innerHTML = checkedValue.toString();
}

var weekDayOvertimeHours = 0;
var weekDayOvertimeRate = 1.25;
var weekDayOvertimePay = 0;

function weekDayOvertimeSalary() {
    console.log(payRate);
    var weekDayOvertimeHours = document.getElementById("weekDayOvertime").value;
    var weekDayOvertimePay = weekDayOvertimeHours * payRate * weekDayOvertimeRate;
    document.getElementById("weekDayOvertimePay").innerHTML = "$" + weekDayOvertimePay;
}

var weekDayOvertimeHours2 = 0;
var weekDayOvertimeRate2 = 1.45;
var weekDayOvertimePay2 = 0

function weekDayOvertimeSalary2() {
    console.log(payRate);
    var weekDayOvertimeHours2 = document.getElementById("weekDayOvertime2").value;
    var weekDayOvertimePay2 = weekDayOvertimeHours2 * payRate * weekDayOvertimeRate2;
    document.getElementById("weekDayOvertimePay2").innerHTML = "$" + weekDayOvertimePay2;
}

var satHours = 0;
var satPay = 0;

function satSalary() {
    console.log(payRate);
    var satHours = document.getElementById("saturdayNormal").value;
    var satpay = satHours * payRate + 3;
    document.getElementById("satPay").innerHTML = "$" + satpay;
}

var sunHolNormalHours = 0;
var sunHolPay = 0;

function sunHolSalary() {
    console.log(payRate);
    var sunHolHours = 
}