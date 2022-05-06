import React from 'react';
import bImg from '../../../images/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='row w-100 d-flex justify-content-center align-items-center mx-auto my-3'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 mx-auto'>
                <img className='rounded-3' style={{ height: '500px', width: "100%" }} src={bImg} alt="" />
            </div>

            <div className='col col-12 col-sm-12 col-md-12 col-lg-6 '>
                <h2 className='text'>Welcome to <span className='text-warning'>Modern Telecom</span></h2>
                <p className='text'>Hey, if you want to purchase any telecom item, contact with us, We are working about telecom service. We have provide you to top notch service. We provide wholesale and retail also. </p>
                <button className='btn'>Explore</button>
            </div>


        </div>
    );
};

export default Banner;