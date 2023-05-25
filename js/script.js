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
    var amount = prompt("Enter the amount in shs:");
    alert("Payment Received for acc no: " + mobileNumber);
}

function payBill() {
    var accountNumber = prompt("Enter the account number:");
    var amount = prompt("Enter the amount in shs:");
    alert("Payment Received for acc no: " + accountNumber);
}


function buyGoods() {
    var payBillNumber = prompt("Enter the pay bill number:");

}

function handlePaymentReceived() {
    alert("Payment received");
}

var budgetData = [];
function enterAmount(category) {
  var amount = prompt("Enter the amount in shs for " + category + ":");
  if (amount !== null) {
    console.log("Amount for " + category + ": " + amount);
    var data = { category: category, amount: amount }; 
    budgetData.push(data); 
    updateBudgetList(); 
  } else {
    console.log("Amount not entered for " + category);
  }
  var Amount = confirm("Confirm pesa kwanza ya " + category + " ni: " + amount);
  
}

function updateBudgetList() {
  var budgetList = document.getElementById("budget-list");
  budgetList.innerHTML = ""; 

  for (var i = 0; i < budgetData.length; i++) {
    var item = budgetData[i];
    var listItem = document.createElement("li");
    listItem.textContent = item.category + ": " + item.amount + " shs";
    budgetList.appendChild(listItem);
  }
}
