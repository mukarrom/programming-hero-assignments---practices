// use localStorage to manage cart data 
const addToDb = id => {

let shoppingCart;
//get the shopping cart
const storedCart = localStorage.getItem('shopping-cart');
if (storedCart) {
    shoppingCart=JSON.parse(storedCart)
}else{
    shoppingCart={};
}
//add quantity
const quantity = shoppingCart[id];
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id]=newQuantity;
}else{
    shoppingCart[id]=1;
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeCart = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            //delete property
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
    
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDb, removeCart, deleteShoppingCart}