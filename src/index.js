console.log("Welcome to the your Shopee Cart!");

import createitem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishlist = [];

const item1 = await createitem("hotwheels ferrari", 20.99, 10);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2, myWhishlist);

console.log("Shopee Cart Total is");
await cartService.calculateTotal(myCart);