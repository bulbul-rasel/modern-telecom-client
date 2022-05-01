import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const myItem = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitem?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItem(data);
            } catch (error) {
                toast(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        myItem();

    }, [user]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for delete?');
        if (proceed) {
            (async () => {
                const { data } = await axios.delete(`http://localhost:5000/products/${id}`);

                if (!data.success) return toast.error(data.error)

                toast(data.message);

                const remaining = myItem.filter(item => item._id !== id);
                setMyItem(remaining)
            })()
        }
    }

    return (
        <div>
            <h2 className="title-lr text-center">My Items</h2>
            <div>
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
                            myItem.map(item => {
                                return <tr>
                                    <th>{item.name}</th>
                                    <td style={{ width: "100px" }} ><img className='w-100' src={item.image} alt="" /></td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.sname}</td>
                                    <td style={{ width: "100px" }}>
                                        <Link
                                            to={'/myItem'}
                                            onClick={() => handleDelete(item._id)}

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
        </div>
    );
};

export default MyItem;