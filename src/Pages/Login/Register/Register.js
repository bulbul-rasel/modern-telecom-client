import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import regImg from '../../../images/reg.jpg'
import './Register.css'


const Register = () => {
    return (
        <div className=' container row w-100 d-flex justify-content-center align-items-center mx-auto'>
            <h2 className='text-center mt-2 title-lr'>Please Register</h2>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto'>
                <img className='w-100' src={regImg} alt="" />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 w-50 mx-auto '>

                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className=' ' type="email" placeholder="Enter your email address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' type="password" placeholder="Enter your password" required
                        />

                    </Form.Group>
                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Register
                    </Button>
                    <p>New to Modern Telecom? <Link to={'/login'} className='text-info text-decoration-none'> Please Login</Link ></p>
                </Form>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;