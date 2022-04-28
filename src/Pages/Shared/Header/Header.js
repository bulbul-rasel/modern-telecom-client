import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Modern Dental
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='mt-2' as={Link} to="about">About</Nav.Link>
                            <Nav.Link className='mt-2' as={Link} to="subscribe">Subscribe</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='mt-2' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                        <p className='text-white mt-3'>{user?.email}</p>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;