const inputEl = document.querySelector("#validation-input");

inputEl.classList.add("invalid");
inputEl.addEventListener("input", (event) => {
  event.currentTarget.value.length == inputEl.dataset.length
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.replace("valid", "invalid");
});
