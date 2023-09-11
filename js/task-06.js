const input = document.querySelector("#validation-input");
const lengthD = document.querySelector('[data-length="6"]');
const getLeng = lengthD.getAttribute("data-length");

function blur() {
  if (input.value.length == getLeng) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", blur);
