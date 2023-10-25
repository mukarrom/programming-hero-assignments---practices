function getPin() {
  const pin = Math.ceil(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    console.log(pin);
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  feiled = document.getElementById("display-pin");
  feiled.value = getPin();
}
document.getElementById("key-pad").addEventListener("click", function (e) {
  let btn = event.target.innerText;
  const typedNumber = document.getElementById("typed-numbers");
  if (isNaN(btn)) {
    if (btn == "C") {
      typedNumber.value = "";
    }
  } else {
    const previousNumber = typedNumber.value;
    typedNumber.value = previousNumber + btn;
  }
});
function verifyPin() {
  const typedNumber = document.getElementById("typed-numbers");
  const pinNumber = document.getElementById("display-pin");
  const failAlert = document.getElementById("notify-fail");const successAlert = document.getElementById("notify-success");

  if (typedNumber.value == pinNumber.value) {
    successAlert.style.display='block';
    failAlert.style.display='none';
  } else {
    successAlert.style.display='none';
    failAlert.style.display='block';
  }
}
