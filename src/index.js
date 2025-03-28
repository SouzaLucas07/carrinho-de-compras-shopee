console.log("Welcome to the your Shopee Cart!");

import createitem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishlist = [];

const item1 = await createitem("hotwheels ferrari", 20.99, 1);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);

//adicione dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2, /*myWhishlist*/);

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.dispayCart(myCart);

//delete dois itens do carrinho
//await cartService.deletItem(myCart, item2.name);
//await cartService.deletItem(myCart, item1.name);

await cartService.calculateTotal(myCart);