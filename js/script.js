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
    if (mobileNumber !== null) {
        console.log("Sending money to: " + mobileNumber);
    } else {
        console.log("Mobile number not entered");
    }
}

function payBill() {
    var accountNumber = prompt("Enter the account number:");
    if (accountNumber !== null) {
        console.log("Paying bill from account: " + accountNumber);
    }
}

function buyGoods() {
    var payBillNumber = prompt("Enter the pay bill number:");
    if (payBillNumber !== null) {
        console.log("Buying goods from pay bill: " + payBillNumber);
    }
}
