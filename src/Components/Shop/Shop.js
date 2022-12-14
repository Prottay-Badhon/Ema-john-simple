import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from "../Product/Product"
import "./Shop.css";

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])

    const addToCartHandler =(product)=>{
        const newProduct =[...cart,product] 
        setCart(newProduct);
    }
    return (
        <div className='shop-container'>
            <div className='shopping-container'>
                {
                    products.map( product => <Product product={product} key={product.id}
                        addToCartHandler={addToCartHandler} 
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;