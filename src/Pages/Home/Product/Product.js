import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, sname } = product;

    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='product shadow-lg p-3'>
            <img className='w-100' src={image} alt="" />
            <h4 className='title-lr'> Name: {name}</h4>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {sname}</p>
            <Button onClick={() => navigateToProductDetail(_id)} className='mx-auto w-100 rounded-pill' variant="" type="submit">
                Update
            </Button>
        </div>
    );
};

export default Product;