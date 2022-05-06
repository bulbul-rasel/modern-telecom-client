import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import store from '../../../images/store.png'

import { Button } from 'react-bootstrap';

const Subscribe = () => {
    const handleCheckout = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const feedback = event.target.feedback.value;
        toast('Thanks for giving feedback', name, email, feedback);
        event.target.reset()
    }

    return (
        <div id='subscribe' className='row container mx-auto w-100'>
            <div className='register-form col-md-6 col-sm-12'>
                <h2 className='text-info text-center mb-3'>Booked Product</h2>
                <form onSubmit={handleCheckout}>
                    <input
                        className=' '
                        type="text" name='name' placeholder='Enter your name' required />
                    <input
                        className=' '
                        type="email" name="email" id=""
                        placeholder='Please Enter Email' required />

                    <textarea
                        className=' w-100' type="text-area" name='feedback'
                        placeholder='Give your Product Description' required />


                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Booked
                    </Button>

                </form>


            </div>
            <div className=' col-md-6 col-sm-12 '>
                <h2 className='text-info text-center '>Get App On</h2>
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{ width: "300px" }} src={store} alt="" />

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default Subscribe;