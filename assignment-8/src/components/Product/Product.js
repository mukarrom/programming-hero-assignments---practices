import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product,addToCart}) => {
    const {images, name, price} = product;

    return (
        <div className='product'>
            <img src={images} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: &#2547;{price}</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;