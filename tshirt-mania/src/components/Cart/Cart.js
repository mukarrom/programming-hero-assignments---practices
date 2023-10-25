import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //Conditional rendering option
    //1. Element Variable
    //2. Ternary oparator
    //3. && oparator
    //4. || oparator
    let command;
    if (cart.length === 0) {
        command = <p>Please, Add at least one item!</p>
    }else if (cart.length === 1) {
        command = <p>Please, Add more....</p>
    }else{
        command = <p>Thanks for adding items.</p>
    }
    return (
        <div>
            {
                cart.map(tShirt=> <p>
                    {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {
                cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove all</button>
            }
            {/* {cart.length === 3 && 'this is true'}
            {cart.length === 3 || 'this is false'} */}
            
        </div>
    );
};

export default Cart;