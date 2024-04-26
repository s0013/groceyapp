import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';

function Product({ title, image, price }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addtoCart({ title, image, price, quantity: 1 })); // Add quantity property with initial value of 1
    };

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt="" className="w-100"/>
            <br/>
            <p className="card-text text-black">Price: ${price}</p>
            <button className="btn btn-warning" onClick={handleAddToCart}>
                Add to cart
            </button>
        </div>
    );
}

export default Product;
