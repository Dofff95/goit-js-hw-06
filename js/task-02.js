const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  let ingItm = document.createElement("li");
  ingItm.textContent = element;
  console.log(ingItm);
  ingItm.classList.add("item");
  list.before(ingItm);
});
