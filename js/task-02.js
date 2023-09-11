const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const liElements = ingredients.map((element) => {
  let ingItm = document.createElement("li");
  ingItm.textContent = element;
  console.log(ingItm);
  ingItm.classList.add("item");
  return ingItm;
});
list.append(...liElements);
