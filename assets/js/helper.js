// scroll up

const scrollUp = document.querySelector(".scroll_up");
export function scrollPage() {
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
}
// countdown function

export function countDown() {
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
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}

const prductContainer = document.querySelector(".container");

export function ProductList(list) {
  prductContainer.innerHTML = "";
  list.forEach((product) => {
    prductContainer.innerHTML += `
    <div class="procut-item">
            <div class="product-image">
              <img src="${product.imageFront}" alt="" />
              <img src="${product.imageBack}" alt="" />
            </div>
            <div class="product-content-wrap">
              <a href="#" class="product-category">${product.category}</a>
              <a href="#" class="product-title">
                ${product.title}
              </a>
              <div class="product-item-bottom">
                <div class="product-price">
                  <span class="price">${product.newPrice}</span>
                  <span class="old-price">${product.oldPrice}</span>
                </div>
                <button class="product-card-icon" data-id=${product.id}>
                  <i class="bx bx-cart"></i>
                  <span>add</span>
                </button>
              </div>
            </div>
     </div> 
    `;
  });
}
