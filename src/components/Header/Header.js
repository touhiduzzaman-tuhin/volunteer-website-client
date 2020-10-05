import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 1329.png';
import './Header.css'

const Header = () => {
    return (
        <div align="center" style={{marginBottom: '50px'}}>
            <Navbar bg="light" variant="light">
                <img
                    src={logo}
                    width="150"
                    height="50"
                    className="d-inline-block align-top mr-auto"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="">
                    <Link to='/home'>Home</Link>
                </Navbar.Brand>
                <Navbar.Brand href="">
                    <Link to='/donation'>Donation</Link>
                </Navbar.Brand>
                <Navbar.Brand href="">
                    <Link to='/event'>Event</Link>
                </Navbar.Brand>
                <Navbar.Brand href="">
                    <Link to='/blog'>Blog</Link>
                </Navbar.Brand>
                <Button variant="primary" className='mr-2'>
                    <Link to='/register' style={{color: 'black'}}>Register</Link>
                </Button>
                <Button variant="dark">
                    <Link to='/AddEvent' style={{color: 'white'}}>Admin</Link>
                </Button>
            </Navbar>
            <h3>I GROW BY HELPING PEOPLE YOU NEED</h3>
            <Navbar className="bg-light justify-content-center ">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;