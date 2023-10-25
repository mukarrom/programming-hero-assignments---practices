function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById("input-" + product + "-value");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // Update case total
  const productTotal = document.getElementById(product + "-price");
  productTotal.innerText = productNumber * price;
  // calculate total
  calculateTotal();
}

function getInputNumber(product) {
  const productInput = document.getElementById("input-" + product + "-value");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputNumber("phone") * 1219;
  const caseTotal = getInputNumber("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  //Update on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
  
}

// handle phone increase decrease events
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    updateProductNumber("phone", 1219, true);
  });
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    updateProductNumber("phone", 1219, false);
  });
// handle case increase decrease events
document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateProductNumber("case", 59, false);
  });
