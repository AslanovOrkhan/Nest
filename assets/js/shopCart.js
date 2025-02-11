import { BasketProducts } from "./basketClass.js";
import product from "./data.js";
const ShopCartContainer = document.querySelector("tbody");
const subtotal = document.querySelector(".subtotal");
const order = document.querySelector(".order");
let basketApp;

document.addEventListener("DOMContentLoaded", function () {
  basketApp = new BasketProducts();
  let subTotalPrice = 0;
  basketApp.basketItems.forEach((basketx) => {
    const products = product.find((x) => x.id == basketx.id);
    ShopCartContainer.innerHTML += `
    <tr data-id ="${products.id}">
        <td>${products.id}</td>
        <td><img src="${products.imageFront}" alt=""/></td>
        <td>${products.title}</td>
        <td>
          <i class="bx bx-plus" id="plus" data-id =${products.id}></i>
          <span class="product-quantity">
          ${basketx.quantity}
          </span>
          <i class="bx bx-minus" id="minus"></i>
        </td>
        <td>${products.newPrice}</td>
        <td>${(products.newPrice * basketx.quantity).toFixed(2)}</td>
        <td><i class="bx bx-trash" id="trash"></i></td>
      </tr>
    `;
    subTotalPrice += products.newPrice * basketx.quantity;
  });
  subtotal.textContent = subTotalPrice.toFixed(2);
  const trash = Array.from(document.querySelectorAll("#trash"));

  trash.forEach((trashBtn) => {
    trashBtn.addEventListener("click", function () {
      const id = this.parentElement.parentElement.getAttribute("data-id");
      basketApp.delete(id);
      this.parentElement.parentElement.remove();
    });
  });
  const productQuantity = Array.from(
    document.querySelectorAll(".product-quantity")
  );
  const increase = Array.from(document.querySelectorAll("#plus"));
  for (let i = 0; i < increase.length; i++) {
    increase[i].addEventListener("click", function () {
      productQuantity[i].textContent =
        Number(productQuantity[i].textContent) + 1;
    });
  }
});

//   increase.forEach((plus) => {
//     plus.addEventListener("click", function () {
//       const id = this.getAttribute("data-id");
//       productQuantity.textContent = ;
//     });
//   });
// });

// order.addEventListener("click", function () {
//   ShopCartContainer.innerHTML = "";
//   subtotal.textContent = "0";
//   basketApp.clear();
// });
