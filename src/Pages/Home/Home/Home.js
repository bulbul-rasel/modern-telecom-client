import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Subscribe from '../../Shared/Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    const navigate = useNavigate();
    const handleRoute = () => {
        navigate('/manageItem')
    }
    return (

        <div>
            <Banner></Banner>
            <Products></Products>
            <button onClick={handleRoute} className='btn mx-auto my-3 text-center d-flex justify-content-center'>Manage Inventories</button>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;