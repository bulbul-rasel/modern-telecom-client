import React from 'react';
import ulogo from '../../../images/ulogo.png'
import flogo from '../../../images/facebook.png'
import ilogo from '../../../images/ilogo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{ backgroundColor: "#13d89d" }}>
            < div className=' container row d-flex mt-5 w-100 mx-auto'>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <h4 className=''>Information </h4>
                    <p>About Us</p>
                    <p>Blogs</p>
                    <p>More Result</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <h4 className=''>Service </h4>
                    <p>Telecom Service</p>
                    <p>Sales Guid</p>
                    <p>24*7 Support</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <h4 className=''>Helpful Link </h4>
                    <p>Telecom Services</p>
                    <p>Trems & Conditions</p>
                    <p>Privacy</p>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 my-3'>
                    <h4 className=''>Connect Us </h4>
                    <div className='mb-3'>
                        <img style={{ width: "40px" }} src={ulogo} className='rounded-pill ' alt="" />
                        <img style={{ width: "30px" }} src={flogo} className='rounded-pill mx-3' alt="" />
                        <img style={{ width: "30px" }} src={ilogo} className='rounded-pill ' alt="" />
                    </div>
                    <p>✉ rasel.bulbul7@gmail.com</p>
                    <p>📞 +8801234567890</p>
                </div>
            </div>
            <p className='text-center pb-5 text-white'>  &copy; copyright {year} All Rights Reserve Modern Telecom</p>

        </div>
    );
};

export default Footer;