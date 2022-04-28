import React from 'react';
import notfound from '../../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='container w-100 mx-auto text-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;