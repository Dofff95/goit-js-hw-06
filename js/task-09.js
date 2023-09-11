const bodycolor = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorBtn.addEventListener("click", getColor);
function getColor() {
  const randomColor = getRandomHexColor();
  bodycolor.style.backgroundColor = randomColor;
  spanColor.textContent = `${randomColor}`;
}
