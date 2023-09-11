const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  if (input.value == 0) {
    return (output.textContent = "Anonymous");
  } else {
    output.textContent = event.currentTarget.value.trimStart().trimEnd();
    event.preventDefault(output);
  }
});
