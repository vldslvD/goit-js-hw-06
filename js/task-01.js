const categoriesEl = document.querySelector("#categories");
console.log("Number of categories: " + categoriesEl.children.length);

const itemsEl = document.querySelectorAll("#categories .item");
itemsEl.forEach((item) => {
  console.log("Category: " + item.querySelector("h2").textContent);
  console.log("Elements: " + item.querySelector("ul").children.length);
});
