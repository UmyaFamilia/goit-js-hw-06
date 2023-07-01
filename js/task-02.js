const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let array = [];
let i = 0;
ingredients.forEach((element) => {
  array.push(document.createElement("li"));
  array[i].textContent = element;
  array[i].classList.add("item");
  i++;
});
const conteiner = document.querySelector("#ingredients");
console.dir(conteiner);
conteiner.append(...array);
