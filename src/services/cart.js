//quais açoes meu carrinho pode fazer?

//casos de uso
//✅->adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
//✅->deletar item do carrinho
async function deletItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}
//✅->remover um item - diminui um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p)=> p.name === item.name)
    
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }
    if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
    return;
    }
}
//✅->calcular o total do carrinho
async function calculateTotal(userCart) {
   console.log("\nShopee Cart Total is");
   const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
   console.log(`🎁 Total: ${result}`);
}

async function dispayCart(userCart) {
    console.log("\nShopee Card List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    })
 }

export {addItem, calculateTotal, deletItem, removeItem, dispayCart};