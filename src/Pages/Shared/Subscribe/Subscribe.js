import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import ulogo from '../../../images/ulogo.png'
import flogo from '../../../images/facebook.png'
import ilogo from '../../../images/ilogo.png'

const Subscribe = () => {
    const [agree, setAgree] = useState(false);
    const handleCheckout = (event) => {
        event.preventDefault();
        toast('Thanks for giving feedback');
    }

    return (
        <div id='subscribe' className='row container mx-auto w-100'>
            <div className='register-form col-md-6 col-sm-12'>
                <h2 className='text-info text-center mb-3'>Give Your Feedback</h2>
                <form onSubmit={handleCheckout}>
                    <input
                        className=' '
                        type="text" placeholder='Enter your name' required />
                    <input
                        className=' '
                        type="email" name="email" id=""
                        placeholder='Please Enter Email' required />

                    <textarea
                        className=' w-100' type="text-area"
                        placeholder='Give your Feedback' required />



                    <input
                        onClick={() => setAgree(!agree)}
                        type="checkbox" name="terms" id="terms" />

                    <label
                        className={agree ? "" : "text-info"}
                        htmlFor="terms"> Accept Terms and Condition?</label>
                    <input
                        disabled={!agree}
                        className='w-100 rounded-pill btn btn-info'
                        type="submit"
                        value="Submit Feedback" required />
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