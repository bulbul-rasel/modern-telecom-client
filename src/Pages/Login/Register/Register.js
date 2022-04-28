import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import regImg from '../../../images/reg.jpg'
import SocialLogin from '../../Shared/SociaLogin/SocialLogin';
import './Register.css'


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [user1, loading1] = useAuthState(auth);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    if (user1) {
        console.log("user", user1);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate("/home")
    }
    const navigateLogin = () => {
        navigate("/login")
    }

    return (
        <div className=' container row w-100 d-flex justify-content-center align-items-center mx-auto register-form'>
            <h2 className='text-center mt-2 title-lr'>Please Register</h2>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto'>
                <img className='w-100' src={regImg} alt="" />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 w-50 mx-auto '>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control className=' ' type="text" placeholder="Enter your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className=' ' name="email" type="email" placeholder="Enter your email address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' type="password" name="password" placeholder="Enter your password" required
                        />

                    </Form.Group>
                    <Button className='mx-auto w-100 rounded-pill' variant="" type="submit">
                        Register
                    </Button>
                    <p>New to Modern Telecom? <Link to={'/login'} className='text-info text-decoration-none' onClick={navigateLogin}> Please Login</Link ></p>
                </Form>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;