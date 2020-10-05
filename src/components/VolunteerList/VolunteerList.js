import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { userContext } from '../../App';
import logo from '../../images/Group 1329.png';
import user from '../../images/users-alt 1.png';
import plus from '../../images/plus 1.png'
import { Link } from 'react-router-dom';
import './VolunteerList.css';

const VolunteerList = () => {
    const [volunteer, setVolunteer] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect( () => {
        // fetch('https://safe-river-91645.herokuapp.com/volunteers?email='+loggedInUser.email, {
        //     method: 'GET',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         authorization: `Bearer ${sessionStorage.getItem('token')}`
        //     }
        // })
        fetch('https://safe-river-91645.herokuapp.com/volunteers?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setVolunteer(data))
    }, [])
    return (
        <div style={{display: 'flex'}}>
            <div className='register-event-left'>
                <img height="50px" src={logo} alt=""/> <br/>
                <Button>
                    <Link to='/volunteerList' style={{color: 'black'}}>
                        Volunteer Register List
                    </Link>                                       
                </Button>
                <br/>
                <br/>
                <Button>
                    <Link to='/addEvent' style={{color: 'black'}}>
                       Add Event
                    </Link>
                </Button>

            </div>

            <div className='register-event' style={{backgroundColor: '#f8fafc'}}>
                <h3 style={{marginBottom: '50px'}}>Volunteer List</h3>
                <div className='register-user-style'>
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Registration Date</h3>
                    <h3>Volunteer List</h3>
                    <h3>Action</h3>
                    {/* {
                        // volunteer.map(event => <li key={event._id}> {event.name} {(new Date(event.registerDate)).toDateString('dd-MM-yyyy')} </li>)
                        volunteer.map(event => <div>
                            <p>Name : {event.name}</p>
                            <p>Email : {event.email}</p>
                            </div>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;