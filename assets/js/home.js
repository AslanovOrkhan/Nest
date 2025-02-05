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

// scroll up

let scrollUp = document.querySelector(".scroll_up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});
scrollUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// countdown function

let countDownDate = new Date("Oct 1, 2025 00:00:00").getTime();

let y = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(y);
    document.querySelector(".countdown").innerHTML = "<h3>Time's up!</h3>";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// dialog modal
let closeModalBtn = document.getElementById("close-modal-btn");
let dialogModalContainer = document.querySelector(".dialog_modal_container");

window.onload = function () {
  dialogModalContainer.classList.remove("close");
};

closeModalBtn.addEventListener("click", () => {
  dialogModalContainer.classList.add("close");
});
