import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {id,category,name,price,seller,img,ratings}=props.product;
    return (
        <div className='product'>
           <img src={img} alt=""/>
           <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='seller'>Seller: {seller}</p>
                <p className='rating'>Rating: {ratings}</p>
                <button className='btn-cart' onClick={()=>props.addToCartHandler(props.product)}>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
           </div>
        </div>
    );
};

export default Product;