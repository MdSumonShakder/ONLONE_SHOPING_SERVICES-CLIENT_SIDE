import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;

    return (
        <div className="product">
            
            <img src={img} alt="" />
            
            <div className="product-tex">
            <h4>{name}</h4>
        <p><small>By: {seller}</small></p>
        <b>${price}</b>
        <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color2"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;