import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import ulogo from '../../../images/ulogo.png'
import flogo from '../../../images/facebook.png'
import ilogo from '../../../images/ilogo.png'
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
                <h2 className='text-info text-center mb-3'>Give Your Feedback</h2>
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
                        placeholder='Give your Feedback' required />


                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Submit Feedback
                    </Button>

                </form>


            </div>
            <div className=' col-md-6 col-sm-12'>
                <h2 className='text-info text-center'>Please Subscribe On</h2>

                <button
                    className='btn btn-primary w-100 rounded-pill my-3'>
                    <img style={{ width: "40px" }} src={ulogo} className='rounded-pill ' alt="" />
                    YouTube
                </button>

                <button
                    className='btn btn-primary w-100 rounded-pill my-2'>
                    <img style={{ width: "30px" }} src={flogo} alt="" />
                    FaceBook
                </button>

                <button
                    className='btn btn-primary w-100 rounded-pill my-3'>
                    <img style={{ width: "30px" }} src={ilogo} alt="" />
                    Instagram
                </button>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default Subscribe;