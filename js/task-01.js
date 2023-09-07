const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

const title = document.querySelectorAll("h2");
const elementsLi = document.querySelectorAll("li");

categories.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const elementsLI = element.querySelectorAll("li").length;

  console.log(`Elements: ${elementsLI}`);
});
