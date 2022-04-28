import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loginImg from '../../../images/login.svg'

const Login = () => {
    return (
        <div className=' container row w-100 d-flex justify-content-center align-items-center mx-auto'>
            <h2 className='text-info text-center mt-2'>Please Login</h2>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto'>
                <img className='w-100' src={loginImg} alt="" />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 w-50 mx-auto '>

                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className=' ' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' type="password" placeholder="Password" required
                        />

                    </Form.Group>
                    <Button className='mx-auto w-100 rounded-pill' variant="primary" type="submit">
                        Login
                    </Button>
                    <p>New to Modern Telecom? <Link to={'/register'} className='text-info text-decoration-none' > Please Register</Link ></p>
                    <p>Forget Password? <button className='btn btn-link text-white text-decoration-none ' > Reset Password </button ></p>
                </Form>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;