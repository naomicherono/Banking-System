
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown");
  dropdownContent.classList.toggle("show");
}

function toggleTransactDropdown() {
  var transactDropdown = document.getElementById("transact-dropdown");
  transactDropdown.classList.toggle("show");
}
function sendMoney() {
var mobileNumber = prompt("Enter the mobile number:");
var amount = prompt("Enter the amount in kshs:");
if (isDecimalNumber(mobileNumber) && isDecimalNumber(amount)) {
  alert("Sent Kshs " + amount + " to: " + mobileNumber);
} else {
  alert("Weka Numbers pekee");
}
}


function payBill() {
var paybillNumber = prompt("Enter the paybill number")
var accountNumber = prompt("Enter the account number:");
var amount = prompt("Enter the amount in kshs:");


if (isDecimalNumber(accountNumber) && isDecimalNumber(amount)) {
  alert("Payment of kshs " + amount + " to acc no: " + accountNumber);
} else {
  alert("Weka Numbers pekee");
}
}

function buyGoods() {
var tillNumber = prompt("Enter the till number:");
var amount = prompt("Enter the amount in kshs:");
if (isDecimalNumber(tillNumber) && isDecimalNumber(amount)) {
  alert("Payment of goods worth Kshs " + amount + " made to till number: " + tillNumber);
} else {
  alert("Weka Numbers pekee");
}
}

function isDecimalNumber(value) {

var decimalPattern = /^\d*\.?\d+$/;
return decimalPattern.test(value);
}

function handleMoneyLimitClick() {
var budgetFor = prompt("What do you want to set a budget for?");
var amount = prompt("Enter the amount in shs");

if (budgetFor === null || budgetFor.trim() === "" || amount === null || amount.trim() === "" || isNaN(amount)) {
  alert("Please enter valid values for both fields.");
  return;
}


var budgetElement = document.createElement("p");
budgetElement.textContent = budgetFor + ": " + amount + " Kshs";
budgetElement.classList.add("small");

var budgetContainer = document.querySelector(".budget-container");
budgetContainer.appendChild(budgetElement);
}

function handleAlertClick(limitType) {
  alert("Still in Progress: " + limitType);
}

function forgotPassword() {
  // Execute the forgot password command here
  console.log("Forgot Password command executed");
}

document.getElementById("settingsButton").addEventListener("click", function() {
  var settingsMenu = document.getElementById("settingsMenu");
  if (settingsMenu.style.display === "none") {
    settingsMenu.style.display = "block";
  } else {
    settingsMenu.style.display = "none";
  }
});