function getUserInput(input) {
  const userInputPrimary = document.getElementById(input);
  const userInputText = userInputPrimary.value;
  const userInputAmount = parseFloat(userInputText);
  userInputPrimary.value = "";

  return userInputAmount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  // income
  const income = getUserInput("income");
  // food
  const food = getUserInput("food");
  // rent
  const rent = getUserInput("rent");
  // cloth
  const cloth = getUserInput("cloth");
  const expenses = food + rent + cloth;
  const balance = income - expenses;

  // is isNan error handling
  if (isNaN(income, food, rent, cloth)) {
    document.getElementById("empty-error").style.display = "block";
    document.getElementById("balance-display").style.display = "none";
  } else if (expenses > income) {
    document.getElementById("income-error").style.display = "block";
    document.getElementById("balance-display").style.display = "none";
  } else if (income <= 0 || food <= 0 || rent <= 0 || cloth <= 0) {
    document.getElementById("empty-error").style.display = "block";
    document.getElementById("balance-display").style.display = "none";
    document.getElementById("income-error").style.display = "none";
  } else {
    document.getElementById("total-expense").innerText = expenses;
    document.getElementById("balance").innerText = balance;
    document.getElementById("balance-display").style.display = "block";
    document.getElementById("income-error").style.display = "none";
    document.getElementById("empty-error").style.display = "none";
  }
});
// savings
document.getElementById("saving-button").addEventListener("click", function () {
  const savingInput = getUserInput("saving-percentage");
  const savingPercentage = savingInput / 100;
  const balanceText = document.getElementById("balance").innerText;
  const balance = parseFloat(balanceText);
  // saving amount
  const savingAmount = balance * savingPercentage;
  // remaining balance
  const updatedBalance = balance - savingAmount;

  // error handling
  // string error
  if (isNaN(savingInput)) {
    document.getElementById("saving-text-error").style.display = "block";
    document.getElementById("saving-update").style.display = "none";
    document.getElementById("zero-error").style.display = "none";
    document.getElementById("saving-error").style.display = "none";
  }
  // saving error
  else if (savingAmount >= balance) {
    document.getElementById("saving-text-error").style.display = "none";
    document.getElementById("saving-update").style.display = "none";
    document.getElementById("zero-error").style.display = "none";
    document.getElementById("saving-error").style.display = "block";
  }
  // zero or negative error
  else if (savingInput <= 0) {
    document.getElementById("saving-text-error").style.display = "none";
    document.getElementById("saving-update").style.display = "none";
    document.getElementById("zero-error").style.display = "block";
    document.getElementById("saving-error").style.display = "none";
  }
  // balance update
  else {
    document.getElementById("saving-text-error").style.display = "none";
    document.getElementById("saving-update").style.display = "block";
    document.getElementById("zero-error").style.display = "none";
    document.getElementById("saving-error").style.display = "none";
    document.getElementById("savings").innerText = savingAmount;
    document.getElementById("rest-balance").innerText = updatedBalance;
  }
});
