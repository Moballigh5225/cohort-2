const reset = document.getElementById("reset");
const plus = document.getElementById("plusButton");
const minus = document.getElementById("minusButton");
const counterDisplay = document.getElementById("counter");

let value = 0;

function updateDisplay() {
  counterDisplay.innerText = value;
}

plus.addEventListener("click", () => {
  value++;
  updateDisplay();
});
minus.addEventListener("click", () => {
  if (value > 0) {
    value--;
  }
  updateDisplay();
});
reset.addEventListener("click", () => {
  value = 0;
  updateDisplay();
});
