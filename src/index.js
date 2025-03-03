import createitem from "./services/item.js";

const cart = [];

console.log("Hello Shopee");

const item1 = await createitem("hotwheels ferrari", 20.99, 1);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());