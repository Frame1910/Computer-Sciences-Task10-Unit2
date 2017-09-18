var payRate = 28;
function manager() {
    if (document.getElementById("position").checked === true) {
        window.payRate = 40;
    } else {
        window.payRate = 28;
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

var overTime = 0;
var overTimeHours = 0;

function overTimePay() {
    console.log(payRate);
    var overTimeHours = document.getElementById("overTimeHours").value;
    window.overTime = overTimeHours * payRate * 1.25;
    if (document.getElementById("position").checked === true) {
        window.overTime = overTimeHours * payRate * 1.35;
    } 
    document.getElementById("overTimePay").innerHTML = "$" + overTime;
    console.log(overTime);
}

var totalWage = 0;

function finalWage() {
    var totalWage = normalPay + overTime;
    document.getElementById("totalWage").innerHTML = "$" + totalWage;
}

var employeeName = "";

function printName() {
    var employeeName = document.getElementById("employeeName").value;
    console.log(employeeName);
    document.getElementById("printEmployeeName").innerHTML = employeeName;
}