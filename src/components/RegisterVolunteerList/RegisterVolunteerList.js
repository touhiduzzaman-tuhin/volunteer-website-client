import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 1329.png';import { userContext } from '../../App';
import Header from '../Header/Header';
import { Button } from '@material-ui/core';
import './RegisterVolunteerList.css';

const RegisterVolunteerList = () => {
    const [events, setEvents] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect( () => {
        fetch('https://safe-river-91645.herokuapp.com/events?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setEvents(data)
        })
    }, [])

    const deleteEvent = (event, id) => {
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            // console.log('Delete successfully')
            if(result){
                event.target.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <div align="center" className='event-main-page'>
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
                <Navbar.Brand href="">
                    {loggedInUser.userName}
                </Navbar.Brand>
            </Navbar>
            <h3>You Have Total {events.length} Events</h3>
            
            {
                // events.map(event => <li>{event.userName} -- {event.email} -- {event.volunteerType}</li>)
                events.map(eventValue => 
                <div className='register-event-style'>
                    <img src={eventValue.picture} alt="" height="150px"/>
                    <div className='register-event-details'>
                        <h5>{eventValue.volunteerType}</h5>
                        <h6>{(new Date(eventValue.registerDate)).toDateString('dd/MM/yyyy')}</h6>
                        <Button variant='contained' onClick={(e) => deleteEvent(e, eventValue._id)}>
                            Cancel
                        </Button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default RegisterVolunteerList;