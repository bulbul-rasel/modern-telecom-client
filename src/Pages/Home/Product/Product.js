import React from 'react';

const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, sname } = product;
    return (
        <div className='product shadow-lg p-3'>
            <img className='w-100' src={image} alt="" />
            <h4 className='title-lr'> Name: {name}</h4>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {sname}</p>
        </div>
    );
};

export default Product;