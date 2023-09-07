const decrement = document.querySelectorAll("button")[0];
const increment = document.querySelectorAll("button")[1];
const counterValue = document.querySelector("#value");

decrement.addEventListener("click", minus);
increment.addEventListener("click", plus);
let sum = 0;
function minus() {
  counterValue.textContent = --sum;
}
function plus() {
  counterValue.textContent = ++sum;
}
