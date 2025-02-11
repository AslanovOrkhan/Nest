const productContainer = document.querySelector(".container");

export function renderProductList(arr) {
  productContainer.innerHTML = "";
  arr.forEach((product) => {
    productContainer.innerHTML += `
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
                  <button class="product-card-icon" data-id="${product.id}">
                    <i class="bx bx-cart"></i>
                    <span>add</span>
                  </button>
                </div>
              </div>
            </div>
    `;
  });
}

// loader

export function hidePreloader() {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";  
    document.getElementById("body").classList.remove("hidden");   
  }, 1000);  
}