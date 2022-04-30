import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ManageItem = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for delete?');
        if (proceed) {
            (async () => {
                const { data } = await axios.delete(`http://localhost:5000/products/${id}`);

                if (!data.success) return toast.error(data.error)

                toast(data.message);

                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            })()
        }
    }

    return (
        <div>
            <h2 className="title-lr text-center">All Items</h2>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return <tr>
                                <th>{product.name}</th>
                                <td style={{ width: "100px" }} ><img className='w-100' src={product.image} alt="" /></td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.sname}</td>
                                <td style={{ width: "100px" }}>
                                    <Link
                                        to={'/manageItem'}
                                        onClick={() => handleDelete(product._id)}

                                    >
                                        DELETE 🗑
                                    </Link>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageItem;