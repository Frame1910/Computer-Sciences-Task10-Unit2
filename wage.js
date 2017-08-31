var payRate = 0;
function manager() {
    if (document.getElementById("position").checked === true) {
        var payRate = 30;
        console.log(payRate);
    } else {
        var payRate = 23;
        console.log(payRate);
    }
}



var normalPay = 0;
var normalHours = 0;
function normalSalary() {
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