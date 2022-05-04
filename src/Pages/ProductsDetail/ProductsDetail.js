import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hookes/useProductDetail';

const ProductsDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [products, setProducts] = useState();
    const [quantity, setQuantity] = useState({})

    const handleDelivered = () => {
        const newQuantity = parseInt(quantity) - 1;
        const updateQuantity = { newQuantity };
        console.log(updateQuantity);
        const url = `https://guarded-plains-52968.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                // event.target.reset();
            })
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const quantity = event.target.name.value;
        const updateQuantity = { quantity };
        console.log(updateQuantity);

        const url = `https://guarded-plains-52968.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity update successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div>
            <h2 className='title-lr text-center'>Product ID: {product._id}</h2>
            <div className='row container w-75 mx-auto d-flex justify-content-center align-items-center'>
                <div className='product shadow-lg p-3 col-12 col-sm-12 col-md-6 col-lg-6'>
                    <h3 className='title-lr text-center'>Delivery Section</h3>
                    <img className='w-100' src={product.image} alt="" />
                    <h4 className='title-lr'> Name: {product.name}</h4>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Supplier Name: {product.sname}</p>
                    <Button onClick={handleDelivered} className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Delivered
                    </Button>
                </div>

                <div className='product shadow-lg p-3 col-12 col-sm-12 col-md-6 col-lg-6'>
                    <h3 className='title-lr text-center'>Update Quantity Section</h3>

                    <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add New Quantity</Form.Label>
                            <Form.Control className=' ' type="text" name='name' placeholder="Enter product quantity" required />
                        </Form.Group>

                        <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                            Quantity update
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;