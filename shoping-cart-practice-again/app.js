function plusMinus(product, plus) {
  const inputField = document.getElementById("input-" + product + "-value");
  const inputValue = inputField.value;
  if (plus == true) {
    //increas input value
    inputField.value = parseInt(inputValue) + 1;
  } else {
    if (inputValue > 0) {
      //decrease input value
      inputField.value = parseInt(inputValue) - 1;
    }
  }

  //update price
  const productPrice = document.getElementById(product + "-price");
  if (product == "phone") {
    productPrice.innerText = 1219 * parseFloat(inputField.value);
  } else if (product == "case") {
    productPrice.innerText = 59 * parseFloat(inputField.value);
  }
  const phonePrice = document.getElementById("phone-price");
  const cesePrice = document.getElementById("case-price");
  const subTotal = document.getElementById("sub-total");
  const tax = document.getElementById("tax-amount");
  const total = document.getElementById("total-price");
  subTotal.innerText =
    parseInt(phonePrice.innerText) + parseInt(cesePrice.innerText);
  tax.innerText = parseInt(subTotal.innerText) / 10;
  total.innerText = parseInt(tax.innerText) + parseInt(subTotal.innerText);
}

//phone plus button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    plusMinus("phone", true);
  });
//phone minus button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    plusMinus("phone", false);
  });
//case plus button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  plusMinus("case", true);
});
//case plus button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    plusMinus("case", false);
  });
