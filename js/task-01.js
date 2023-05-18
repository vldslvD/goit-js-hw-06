const categoriesEl = document.lastElementChild.lastElementChild.children[1];
console.log("Number of categories: " + categoriesEl.children.length);
let array = [];
for (let i = 0; i < categoriesEl.children.length; i++){
  array[i] = categoriesEl.children[i];
}
array.forEach((item) => {
  console.log("Category: " + item.firstElementChild.textContent);
  console.log("Elements: " + item.lastElementChild.children.length);
});
