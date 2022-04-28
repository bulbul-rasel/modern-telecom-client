import React from 'react';
import bImg from '../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='row w-100 d-flex justify-content-center align-items-center mx-auto'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto w-50'>
                <img style={{ height: '400px' }} src={bImg} alt="" />
            </div>

            <div className='container col col-12 col-sm-12 col-md-6 col-lg-6 w-50'>
                <h2>Welcome to <span className='text-warning'>Modern Telecom</span></h2>
                <p>Hey, if you want to purchase any telecom item, contact with us, We are working about telecom service. We have provide you to top notch service. We provide wholesale and retail also. </p>
                <button className='btn'>Explore</button>
            </div>


        </div>
    );
};

export default Banner;