const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxElement = document.querySelector("#boxes");
const input = document.querySelector("input");

input.addEventListener("input", () => {
  const inputValue = input.value;
  for (let i = 0; i < inputValue; i++) {
    let ulEl = document.createElement("div");
    boxElement.appendChild(ulEl);
  }
});

create.addEventListener("click", createBoxes());

destroy.addEventListener("click", clear());
function clear() {
  if (input.value > 0) {
    input.value = "";
    boxElement.removeChild();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
