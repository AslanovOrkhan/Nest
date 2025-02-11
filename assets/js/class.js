export class Product {
  constructor(
    title,
    newPrice,
    oldPrice,
    category,
    discountPercentace,
    imageFront,
    imageBack
  ) {
    this.id = Math.raund(Math.random() * 1000 + new Date().getTime),
    this.title = title;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice,
    this.category = category,
    this.discountPercentace =
        discountPercentace >= 0 && discountPercentace <= 100
          ? discountPercentace
          : 0;
    this.imageBack = imageBack, 
    this.imageFront = imageFront;
    // this.createdAt = new Date();
    // this.stockQuantity = 2;
  }
  getProfit() {
    if (this.discountPercentace === 0) {
      return this.oldPrice;
    } else {
      return (
        this.oldPrice - (this.oldPrice * this.discountPercentace) / 100 - this.costPrice
      );
    }
  }
  getInfo() {
    return `${this.title}, ${this.newPrice} | ${this.category}`;
  }
}

export class BasketItems {
  constructor() {
    if (!JSON.parse(localStorage.getItem("basket"))) {
      localStorage.setItem("basket", JSON.stringify([]));
      this.basketItems = [];
    } else {
      const localBasket = JSON.parse(localStorage.getItem("basket"));
      this.basketItems = [...localBasket];
    }
  }
  add(newBasketItem) {
    const found =this.basketItems.find((x) => x.id == newBasketItem.id)
    if (found) {
      found.quntity++;
    } else {
      this.basketItems.push(newBasketItem);
    }
    localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
    return {
      message:found ? "basket item quantity increased" : "new basket item added",
      data: this.basketItems,
      isNew: found ? false : true
    };
  }
  clear() {
    this.basketItems = [];
    localStorage.setItem("basket", JSON.stringify([]));
  }
  getAll() {
    return this.basketItems;
  }
  getOne(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      return found;
    } else {
      return {
        message: "not found!",
      };
    }
  }
  removeBasketItem(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      const uptadetBasketItems = this.basketItems.filter((x) => x.id != id);
      localStorage.setItem("asket", JSON.stringify([...uptadetBasketItems]));
      return uptadetBasketItems;
    } else {
      return {
        message: "not found!",
      };
    }
  }
  decreaseBasketItemQuantity(id) {
    const found = this.basketItems.find((x) => x.id == id);
    if (found) {
      if (found.quantity === 1) {
        this.removeBasketItem(id);
      } else {
        found.quantity--;
      }
    }
    localStorage.setItem("basket", JSON.stringify([...this.basketItems]));
  }
}
