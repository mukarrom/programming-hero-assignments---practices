//handle deposit button event

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get deposit amount from input field
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value;
    // const depositInputValueNum = parseFloat(depositInputValue);
    // get previus deposit amount
    const previusDepositAmount =
      document.getElementById("deposit-amount").innerText;
    // const previusDepositAmountNum = parseFloat(previusDepositAmount);
    // plus and add to deposit
    const totalDeposit =
      parseFloat(depositInputValue) + parseFloat(previusDepositAmount);
    document.getElementById("deposit-amount").innerText = totalDeposit;
    // update account balance
    //get previus balance amount
    let preBalanceAmount = document.getElementById("balance-amount").innerText;
    // convert to number
    preBalanceAmount = parseFloat(preBalanceAmount);
    const totalBalance = preBalanceAmount + parseFloat(depositInputValue);
    document.getElementById("balance-amount").innerText = totalBalance;

    depositInput.value = "";
  });
// withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get withdraw amount from input field
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = withdrawInput.value;
    // const depositInputValueNum = parseFloat(depositInputValue);
    // get previus deposit amount
    const previusWithdrawAmount =
      document.getElementById("withdraw-amount").innerText;
    const previusDepositAmountNum = parseFloat(previusWithdrawAmount);
    // plus and add to deposit
    const totalWithdraw =
      parseFloat(withdrawInputValue) + previusDepositAmountNum;
    document.getElementById("withdraw-amount").innerText = totalWithdraw;
    // update account balance
    let balanceAmount = document.getElementById("balance-amount").innerText;
    // convert to Number
    let preBalanceAmount = parseFloat(balanceAmount);
    const totalBalance = preBalanceAmount - parseFloat(withdrawInputValue);
    document.getElementById("balance-amount").innerText = totalBalance;

    // let myBl = balanceAmount - totalWithdraw;
    // document.getElementById("balance-amount").innerText = myBl;
    // empty input field;
    withdrawInput.value = "";
  });

// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     let tW = document.getElementById("withdraw-amount").innerText;
//     console.log(tWithdraw);
//   });
// const balanceAmount = document.getElementById("balance-amount").innerText;
// console.log(balanceAmount);
