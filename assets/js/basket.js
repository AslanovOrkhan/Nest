import { BasketItems } from "./class.js";
import product from "./data.js";
const tBody = document.querySelector("tbody");
const subtotal = document.querySelector(".subtotal");
const order = document.querySelector(".order");
let basketApp;
document.addEventListener("DOMContentLoaded", function () {
  basketApp = new BasketItems();
  let priceSum = 0;
  basketApp.basketItems.forEach((basketItem) => {
    const products = product.find((x) => x.id == basketItem.id);
    tBody.innerHTML += `
        <tr>
        <td>${products.id}</td>
        <td><img src="${products.imageFront}" alt="" /></td>
        <td>${products.title}</td>
        <td>
          <i class="bx bx-plus"></i>
          ${basketItem.quantity}
          <i class="bx bx-minus"></i>
        </td>
        <td>${products.newPrice}</td>
        <td>${products.newPrice * basketItem.quantity}</td>
        <td><i class="bx bx-trash" id="trash"></i></td>
      </tr>
    `;
    priceSum += product.newPrice * basketItem.quantity;
  });
  subtotal.textContent = priceSum;
  console.log(priceSum);
});

order.addEventListener("click", function () {
  tBody.innerHTML = "";
  subtotal.textContent = "no item";
  basketApp.clear();
});

export function initializeBasketApp(product, basketApp, basketBadge) {
  document.addEventListener("DOMContentLoaded", function () {
    renderProductList(product);
    basketApp = new BasketItems();

    basketBadge.textContent = basketApp.basketItems.length;

    const basketBtns = Array.from(
      document.querySelectorAll(".product-card-icon")
    );
    basketBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const newBasketItem = { id: this.getAttribute("data-id"), quantity: 1 };
        const result = basketApp.add(newBasketItem);
        if (result.isNew) {
          basketBadge.textContent = Number(basketBadge.textContent) + 1;
        }
      });
    });
  });
}

Pace.on("done", function () {
  setTimeout(() => {
    document.querySelector(".pace").style.display = "none";
  }, 3000); // 3 saniyə gözləyir
});
