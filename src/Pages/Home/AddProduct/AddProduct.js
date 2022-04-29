import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            image: event.target.image.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            sname: event.target.sname.value,

        };
        const { data } = await axios.post("http://localhost:5000/products", product);
        if (!data.success) {
            return toast.error(data.error)
        }

        toast.success(data.message)
        navigate('/manageItem')




        console.log(data);
    }


    return (
        <div>
            <h2>Add Product</h2>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 w-50 mx-auto '>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className=' ' name='name' type="text" placeholder="Enter Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className=' ' name='image' type="text" placeholder="Enter Product Image URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className=' ' name='description' type="text" placeholder="Enter Product Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className=' ' name='price' type="text" placeholder="Enter Product Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control className=' ' name='quantity' type="text" placeholder="Enter Product Quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control className=' ' name='sname' type="text" placeholder="Enter Product Supplier Name" required />
                    </Form.Group>

                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Add Product
                    </Button>
                    <ToastContainer></ToastContainer>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;