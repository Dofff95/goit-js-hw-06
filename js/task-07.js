const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.addEventListener("input", upSize);
function upSize() {
  text.style.fontSize = this.value + "px";
}
