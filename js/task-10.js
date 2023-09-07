const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxElement = document.querySelector("#boxes");

let add = 0;

function createBoxes() {
  let call = create.createElement("div");
  boxElement.append(call);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
