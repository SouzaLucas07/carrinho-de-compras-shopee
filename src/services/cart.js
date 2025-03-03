//quais açoes meu carrinho pode fazer?

//casos de uso
//✅->adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
//->deletar item do carrinho
async function deletItem(userCart, name) {
    
}
//->remover um item - diminui um item
async function removeItem(userCart, index) {
    
}
//->calcular o total do carrinho
async function calculateTotal(userCart) {
    return userCart.reduce((total, item)=> total + item.subtotal(), 0);
}


export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem
};