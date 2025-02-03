let laguageSelect = document.querySelector(".language-select");
let selected = document.querySelector(".select-selected");
let selectItems = document.querySelector(".select-items");
let lngOption = document.querySelectorAll(".lng-option");

let selectionRendered = document.querySelector(".selection-rendered");
let selectionCategories = document.querySelector(".selection-categories");
let searchInput = document.querySelector(".selection-categories input");
let categoryItems = document.querySelectorAll(".selection-categories ul li");

selected.addEventListener("click", () => {
  selectItems.classList.toggle("active");
});

lngOption.forEach((item) => {
  item.addEventListener("click", () => {
    selected.innerHTML = item.innerHTML;
    selectItems.classList.remove("active");
  });
});

selectionRendered.addEventListener("click", () => {
  selectionCategories.classList.toggle("active");
});

searchInput.addEventListener("input", () => {
  let searchValue = searchInput.value.toLowerCase();
  categoryItems.forEach((item) => {
    let categoryText = item.textContent.toLowerCase();
    item.style.display = categoryText.includes(searchValue) ? "block" : "none";
  });
});

categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectionRendered.textContent = item.textContent;
    selectionCategories.classList.remove("active");
  });
});
