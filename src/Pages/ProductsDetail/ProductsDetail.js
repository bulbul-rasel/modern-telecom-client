import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './productDetail.css'


const ProductsDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [newQuantity, setNewQuantity] = useState(0)
    console.log(newQuantity);

    useEffect(() => {
        const url = `https://guarded-plains-52968.herokuapp.com/product/${productId}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setNewQuantity(data.quantity)
                console.log(data.quantity);
            })
    }, [productId])

    const handleDelivered = () => {
        const updatedQuantity = +newQuantity - 1;
        console.log(updatedQuantity);
        setNewQuantity(updatedQuantity)

        const url = `https://guarded-plains-52968.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Delivered successfully!!!');
            })
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const quantity = event.target.name.value;
        const updatedQuantity = newQuantity + parseInt(quantity);
        setNewQuantity(updatedQuantity);

        const url = `https://guarded-plains-52968.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Quantity update successfully!!!');
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
                    <p>Quantity: {newQuantity}</p>
                    <p>Supplier Name: {product.sname}</p>
                    {newQuantity ? <Button onClick={handleDelivered} className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Delivered
                    </Button> : <Button className='mx-auto w-100 rounded-pill stockOut' variant="" type="submit">
                        Stock Out
                    </Button>
                    }
                </div>

                <div className='product shadow-lg p-3 col-12 col-sm-12 col-md-6 col-lg-6'>
                    <h3 className='title-lr text-center'>Update Quantity Section</h3>

                    <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add New Quantity</Form.Label>
                            <Form.Control className=' ' type="text" name='name' placeholder="Enter product quantity" required />
                        </Form.Group>

                        <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                            Re Stock
                        </Button>
                    </Form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductsDetail;