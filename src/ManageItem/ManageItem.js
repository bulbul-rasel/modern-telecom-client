import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './ManageItem.css'

const ManageItem = () => {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        fetch(`https://guarded-plains-52968.herokuapp.com/product?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [limit, pageNumber])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for delete?');
        if (proceed) {
            (async () => {
                const { data } = await axios.delete(`https://guarded-plains-52968.herokuapp.com/products/${id}`);

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
                        products?.length ? products.map(product => {
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
                        }) : <div> No data Found</div>
                    }

                </tbody>
            </table>
            <div className='d-flex my-3 justify-content-end'>
                {
                    [...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)} className={`mx-3 border px-3 page ${pageNumber === number ? "bg-warning" : ""}`}>{number + 1}</div>)
                }
                <select onChange={(event) => setLimit(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageItem;