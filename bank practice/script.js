let loginBtn = document.getElementById("loginBtn");
let registerBtn = document.getElementById("registerBtn");
let logoutBtn = document.getElementById("logoutBtn");

let dashboard = document.getElementById("dashboard");

let dashWelcome = document.getElementById("dashWelcome");
let dashCustomer = document.getElementById("dashCustomer");
let dashBalance = document.getElementById("dashBalance");
let dashLoan = document.getElementById("dashLoan");
let dashStatus = document.getElementById("dashStatus");


let customerData = {

    name: "Rahul",
    balance: 15000,
    loanAmount: 5000

};


if(localStorage.getItem("user")){

    showDashboard();

}


loginBtn.addEventListener("click", function(){

    localStorage.setItem("user", customerData.name);

    showDashboard();

});


logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("user");

    dashboard.style.display = "none";

    loginBtn.style.display = "inline-block";
    registerBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";

});


function showDashboard(){

    dashboard.style.display = "block";

    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";

    dashWelcome.innerText =
        "Welcome, " + customerData.name;

    dashCustomer.innerText =
        "Customer Name: " + customerData.name;

    dashBalance.innerText =
        "Account Balance: " + customerData.balance;

    dashLoan.innerText =
        "Loan Applied: " + customerData.loanAmount;

    let status =
        customerData.loanAmount <= 30000
        ? "Approved"
        : "Not Approved";

    dashStatus.innerText =
        "Loan Status: " + status;

}


let hamburger = document.querySelector(".hamburger");
let headerButtons = document.querySelector(".header-buttons");

hamburger.addEventListener("click", function () {
    headerButtons.classList.toggle("active");
});
