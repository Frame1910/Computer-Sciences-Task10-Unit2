var employeePay = 0;
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
var checkedValue = 0;
function daysWorked(dayNumber) {
    if (document.getElementById(dayNumber.toString()).checked == true) {
        checkedValue = checkedValue + 1
    }
}