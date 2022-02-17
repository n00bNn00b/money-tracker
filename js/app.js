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
  // is isNan error handling
  if (isNaN(income, food, rent, cloth)) {
    document.getElementById("empty-error").style.display = "block";
    document.getElementById("balance-display").style.display = "none";
  }
  if (income <= 0 || food <= 0 || rent <= 0 || cloth <= 0) {
    document.getElementById("empty-error").style.display = "block";
    document.getElementById("balance-display").style.display = "none";
  }
  const expenses = food + rent + cloth;
  document.getElementById("total-expense").innerText = expenses;
  const balance = income - expenses;
  document.getElementById("balance").innerText = balance;
  if (expenses > balance) {
    document.getElementById("balance-display").style.display = "none";
    document.getElementById("income-error").style.display = "block";
  }
});
