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
    window.normalPay = normalHours * payRate;
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
    window.weekDayOvertimePay = weekDayOvertimeHours * payRate * weekDayOvertimeRate;
    document.getElementById("weekDayOvertimePay").innerHTML = "$" + weekDayOvertimePay;
}


var weekDayOvertimeHours2 = 0;
var weekDayOvertimeRate2 = 1.45;
var weekDayOvertimePay2 = 0;

function weekDayOvertimeSalary2() {
    console.log(payRate);
    var weekDayOvertimeHours2 = document.getElementById("weekDayOvertime2").value;
    window.weekDayOvertimePay2 = weekDayOvertimeHours2 * payRate * weekDayOvertimeRate2;
    document.getElementById("weekDayOvertimePay2").innerHTML = "$" + weekDayOvertimePay2;
}


var satHours = 0;
var satPay = 0;

function satSalary() {
    console.log(payRate);
    var satHours = document.getElementById("saturdayNormal").value;
    if (document.getElementById("saturdayNormal").value > 0) {
        window.satPay = satHours * payRate + 3;
    } else {
        window.satPay = 0;
    }
    document.getElementById("satPay").innerHTML = "$" + satPay;
}


var sunHolHours = 0;
var sunHolPay = 0;

function sunHolNormalPay() {
    console.log(payRate);
    var sunHolHours = document.getElementById("sunHolNormal").value;
    if (document.getElementById("sunHolNormal").value > 0) {
        window.sunHolPay = sunHolHours * payRate + 4;
    } else {
        window.sunHolPay = 0;
    }
    document.getElementById("sunHolNormalPay").innerHTML = "$" + sunHolPay;
} 


var sunHolOvertimeHours = 0;
var sunHolOvertimePay = 0;

function sunHolOvertimeSalary() {
    console.log(payRate);
    var sunHolOvertimeHours = document.getElementById("sunHolOver").value;
    if (document.getElementById("sunHolOver").value > 0) {
        window.sunHolOvertimePay = (sunHolOvertimeHours * payRate + 4) * 1.5;
    } else {
        window.sunHolOvertimePay = 0;
    }
    console.log(sunHolOvertimePay);
    document.getElementById("sunHolOvertimePay").innerHTML = "$" + sunHolOvertimePay;
}


var totalWage = 0;

function finalWage() {
    var totalWage = normalPay + weekDayOvertimePay + weekDayOvertimePay2 + satPay + sunHolPay + sunHolOvertimePay;
    document.getElementById("totalWage").innerHTML = "$" + totalWage;
}

var employeeName = "";

function printName() {
    var employeeName = document.getElementById("employeeName").value;
    console.log(employeeName);
    document.getElementById("printEmployeeName").innerHTML = employeeName;
}