const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  const elementsLI = element.lastElementChild.children.length;
  console.log(`Elements: ${elementsLI}`);
});
