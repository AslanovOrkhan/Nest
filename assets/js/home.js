import product from "./data.js";
import { scrollPage, countDown, ProductList } from "./helper.js";
import { BasketProducts } from "./basketClass.js";
// document.addEventListener("DOMContentLoaded", function () {
//   scrollPage();
// });
// countDown();
// let laguageSelect = document.querySelector(".language-select");
// let selected = document.querySelector(".select-selected");
// let selectItems = document.querySelector(".select-items");
// let lngOption = document.querySelectorAll(".lng-option");

// let selectionRendered = document.querySelector(".selection-rendered");
// let selectionCategories = document.querySelector(".selection-categories");
// let searchInput = document.querySelector(".selection-categories input");
// let categoryItems = document.querySelectorAll(".selection-categories ul li");

// selected.addEventListener("click", () => {
//   selectItems.classList.toggle("active");
// });

// lngOption.forEach((item) => {
//   item.addEventListener("click", () => {
//     selected.innerHTML = item.innerHTML;
//     selectItems.classList.remove("active");
//   });
// });

// selectionRendered.addEventListener("click", () => {
//   selectionCategories.classList.toggle("active");
// });

// searchInput.addEventListener("input", () => {
//   let searchValue = searchInput.value.toLowerCase();
//   categoryItems.forEach((item) => {
//     let categoryText = item.textContent.toLowerCase();
//     item.style.display = categoryText.includes(searchValue) ? "block" : "none";
//   });
// });

// categoryItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     selectionRendered.textContent = item.textContent;
//     selectionCategories.classList.remove("active");
//   });
// });

// // swipper js
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// // featured sliders
// var swiper = new Swiper(".featured-slider", {
//   slidesPerView: 8,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     1200: {
//       slidesPerView: 7,
//     },
//     1054: {
//       slidesPerView: 6,
//     },
//     991: {
//       slidesPerView: 5,
//     },
//     768: {
//       slidesPerView: 4,
//     },
//     576: {
//       slidesPerView: 3,
//     },
//     450: {
//       slidesPerView: 2,
//     },
//     360: {
//       slidesPerView: 2,
//     },
//   },
// });
// AOS function
// AOS.init();
const basketQuantity = document.querySelector("#basket-quantity");
let basketItem = undefined;
document.addEventListener("DOMContentLoaded", function () {
  ProductList(product);
  basketItem = new BasketProducts();
  basketQuantity.textContent = basketItem.basketItems.length;
  const basketBtns = Array.from(
    document.querySelectorAll(".product-card-icon")
  );
  basketBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const newBasketItems = { id: this.getAttribute("data-id"), quantity: 1 };
      const result = basketItem.Add(newBasketItems);
      if (result.isNew) {
        basketQuantity.textContent = Number(basketQuantity.textContent) + 1;
      }
    });
  });
});

// dialog modal
// let closeModalBtn = document.getElementById("close-modal-btn");
// let dialogModalContainer = document.querySelector(".dialog_modal_container");

// closeModalBtn.addEventListener("click", () => {
//   dialogModalContainer.classList.add("close");
// });
