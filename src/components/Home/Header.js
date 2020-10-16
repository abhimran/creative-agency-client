import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { loginContext } from '../../contexts/LoginContext';


const Header = () => {
    const {loggedInUser, signOut} = useContext(loginContext)
    return (
        <Navbar expand="lg" className="navbar">
           
            <Navbar.Brand href="/">
                <img src={logo} alt=""/>
            </Navbar.Brand>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#service">Our Service</Nav.Link>
                <Nav.Link href="#work">Our Work</Nav.Link>
                <Nav.Link href="#contact">Contact us</Nav.Link>
                </Nav>
                {
                    (loggedInUser.isSignin ? <button className="common-btn" onClick={signOut}>Logout</button>: <Link to="/login"><button className="common-btn">Login</button></Link>)
                }
                <Link to="/dashboard">
                    <button className="common-btn">Dashboard</button>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;