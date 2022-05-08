import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './header.css'
import logo from '../../../images/Telecom_logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className='header' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ width: '80px' }} src={logo} alt="" />Modern Telecom
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='me-auto'>
                        <Nav className='me-auto'>

                        </Nav>
                        <Nav>
                            <Nav.Link className='mt-2' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='mt-2' as={Link} to="blogs">Blogs</Nav.Link>

                            {
                                user ?
                                    <Nav.Link className='mt-2' as={Link} to="myItem">My Items</Nav.Link>
                                    :
                                    ""
                            }
                            {
                                user ?
                                    <Nav.Link className='mt-2' as={Link} to="manageItem">Manage Items</Nav.Link>
                                    :
                                    ""
                            }
                            {
                                user ?
                                    <Nav.Link className='mt-2' as={Link} to="addProduct">Add Item</Nav.Link>
                                    :
                                    ""
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='mt-2' as={Link} to="login">
                                        Login
                                    </Nav.Link>}

                            <p className='text-white mt-3'>{user?.email}</p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;