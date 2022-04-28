import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import glogo from '../../../images/glogo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mb-2 mx-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            <div>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-100 rounded-pill mb-3'>
                    <img style={{ width: "30px" }} src={glogo} alt="" />
                    Google Sign in
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;