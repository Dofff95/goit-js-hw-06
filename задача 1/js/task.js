const categories = document.querySelectorAll(".item");
//let sum = 0;
const title = document.querySelectorAll(".item > h2");
const elementsUl = document.querySelectorAll(".item > ul");
console.log(`Number of categories: ${categories.length}`);

title.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  elementsUl.forEach((element) => {
    const elemented = element;
    const elementsLI = elemented.querySelectorAll("li");
    console.log(`Elements: ${elementsLI.length}`);
  });
});

// elements.forEach((element) => {
//console.log(sum++);
// });
// title.forEach((element) => {
//console.log(`Category: ${element.textContent}`);
// });

//console.log(title);

// const categori = document.querySelectorAll(".item")[0];
// const cat = categori.children;
// console.log(cat);
