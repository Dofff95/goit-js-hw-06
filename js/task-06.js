const input = document.querySelector("#validation-input");
const lengthD = document.querySelector('[data-length="6"]');
const getLeng = lengthD.getAttribute("data-length");

function blurF() {
  let currentLength = this.value.length;

  if (currentLength <= getLeng) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

input.addEventListener("blur", blurF);
