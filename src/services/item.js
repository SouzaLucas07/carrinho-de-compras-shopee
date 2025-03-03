//casos de uso dos itens

//->criar item com uso subtotal certo
async function createitem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: ()=> price * quantity,
    };
}

export default createitem;