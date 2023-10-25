import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart,reset}) => {
    const [product, setProduct] = useState('')
    
    //random number generate

    const random=()=>{
        let num = Math.floor((Math.random()*3));
        const chooseOne = cart[num].name;
        setProduct(chooseOne)
    }

    
    return (
        <div className='cart'>
            {
                cart.map(phone=><div key={phone.id}>
                    <p>{phone.name}</p>
                    </div>)
            }
            <button onClick={random}>Choose one for me</button>
            <br />
            <button onClick={()=>reset()}>Reset</button>
            <p>{product}</p>
        </div>
    );
};

export default Cart;