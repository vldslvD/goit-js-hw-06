const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = ingredients.map(((ingredient) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");
  return listItemEl;
}));
const listEl = document.querySelector("ul#ingredients");
listEl.append(...elements);
