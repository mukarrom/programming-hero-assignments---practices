import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const {tshirt, handleAddToCart} = props;
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={()=>handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;