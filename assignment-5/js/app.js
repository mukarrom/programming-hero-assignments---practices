// Get all input and balance
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const saveInput = document.getElementById("save-input");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

function calcMoney(myId) {
  // error handle : string, negative number and empty
  const inpt = document.getElementsByTagName("input");
  for (let input of inpt) {
    if (isNaN(input.value) || input.value < 0 || input.value == "") {
      alert("Sorry, you can not enter input string or negative number");
      input.value = 0;
    } else {
      // calculate total expanses
      if (myId == true) {
        let totalExpensesAmount =
          parseInt(foodInput.value) +
          parseInt(rentInput.value) +
          parseInt(clothesInput.value);
        // error handle: alert if total expense amount greater than income
        if (totalExpensesAmount > incomeInput.value) {
          input.value = 0;
          alert("your expenses is greater than income");
        } else {
          totalExpenses.innerText = totalExpensesAmount;
        }
        balance.innerText =
          parseFloat(incomeInput.value) - parseFloat(totalExpenses.innerText);
      } else {
        // saving and remaining balance
        let saving =
          (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;
        // error handle: alert if saving amount greater than balance
        if (saving > balance.innerText) {
          saveInput.value = 0;
          alert("your save is greater than balance");
        } else {
          savingAmount.innerText = saving;
        }
        remainingBalance.innerText =
          parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
      }
    }
  }
}

// Calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  calcMoney(true);
});
// Save button
document.getElementById("seve-btn").addEventListener("click", function () {
  calcMoney(false);
});
