class Product {
  constructor(
    id,
    title,
    newPrice,
    oldPrice,
    category,
    discountPercentace,
    imageFront,
    imageBack
  ) {
    this.id = id;
    this.title = title;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice;
    this.category = category;
    this.discountPercentace = discountPercentace;
    this.imageFront = imageFront;
    this.imageBack = imageBack;
  }
}

export class BasketProducts {
  constructor() {
    if (!JSON.parse(localStorage.getItem("basket"))) {
      localStorage.setItem("basket", JSON.stringify([]));
      this.basketItems = [];
    } else {
      const localBasketItems = JSON.parse(localStorage.getItem("basket"));
      this.basketItems = [...localBasketItems];
    }
  }

  All() {
    return this.basketItems;
  }
  Add(newBasketProduct) {
    const productFound = this.basketItems.find(
      (i) => i.id == newBasketProduct.id
    );
    if (productFound) {
      productFound.quantity++;
    } else {
      this.basketItems.push(newBasketProduct);
    }
    localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    return {
      isNew: productFound ? false : true,
    };
  }
  delete(id) {
    const productFound = this.basketItems.find((i) => i.id == id);
    if (productFound) {
      const updateItems = this.basketItems.filter((x) => x.id != id);
      this.basketItems = [...updateItems];
      localStorage.setItem("basket", JSON.stringify([...updateItems]));
      return updateItems;
    } else {
      return {
        message: "error!",
      };
    }
  }
  clear() {
    this.basketItems = [];
    localStorage.setItem("basket", JSON.stringify([]));
  }
  increase(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      found.quantity++;
      localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    }
  }

  
  decrease(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      found.quantity--;
      localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    }
  }
}
