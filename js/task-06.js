const input = document.querySelector("#validation-input");
const correctLength = parseInt(input.getAttribute('data-length'));

input.addEventListener("blur", blur);
function blur() {
  if (input.value.trim().length === correctLength) {
    console.log(correctLength);
    input.classList.remove("invalid");
    return input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

