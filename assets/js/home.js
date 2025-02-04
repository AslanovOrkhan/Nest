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

// swipper js
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// featured sliders
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 8,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    

    1200: {
      slidesPerView: 7,
    },
    1054: {
      slidesPerView: 6,
    },
    991: {
      slidesPerView: 5,
     },
     768: {
      slidesPerView: 4,
     },
     576: {
      slidesPerView: 3,
     },
     450: {
      slidesPerView: 2,
     },
     360: {
      slidesPerView: 2,
     },
  },
});
// AOS function
AOS.init();
