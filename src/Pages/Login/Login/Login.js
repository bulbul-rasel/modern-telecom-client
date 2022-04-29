import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import loginImg from '../../../images/login.svg'
import SocialLogin from '../../Shared/SociaLogin/SocialLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [updatePassword, updating] = useUpdatePassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
        toast(errorElement)
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);


        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast("Email Sent");
                }, [])

        } else {
            toast("Enter Your Email");
        }
    }



    return (
        <div className=' container row w-100 d-flex justify-content-center align-items-center mx-auto'>
            <h2 className='title-lr text-center mt-2'>Please Login</h2>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto'>
                <img className='w-100' src={loginImg} alt="" />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 w-50 mx-auto '>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className=' ' type="email" ref={emailRef} placeholder="Enter your email address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' type="password" ref={passwordRef} placeholder="Enter your password" required
                        />

                    </Form.Group>
                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Login
                    </Button>
                    <p>New to Modern Telecom? <Link to={'/register'} onClick={navigateRegister} className='text-info text-decoration-none' > Please Register</Link ></p>
                    <p>Forget Password? <button className='btn btn-link text-dark text-decoration-none ' onClick={resetPassword} > Reset Password </button ></p>
                </Form>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;