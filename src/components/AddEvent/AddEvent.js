import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import logo from '../../images/Group 1329.png';
import fakeData from '../../fakedata/fakeData';
import './AddEvent.css';
import { Button } from 'react-bootstrap';
import user from '../../images/users-alt 1.png';
import plus from '../../images/plus 1.png'
import { Link } from 'react-router-dom';
const AddEvent = () => {
    const [volunteer, setVolunteer] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleAddVolunteer = () => {
        fetch('https://safe-river-91645.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
            // body: JSON.stringify(product)
        })
    }

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

            <div className='register-event'>
                <h3>Add Event</h3>
                
                <form className='form-event-register' action="">
                    
                    &nbsp; &nbsp;Event Type:  <input type="text" placeholder='Enter Event Type' name="type" id=""/>
                    &nbsp; &nbsp;Event Date: <input type="text" placeholder='Enter Event Date' name="" id=""/> <br/><br/>
                    &nbsp; &nbsp;Description: <input type="text" placeholder='Enter Event Description' name="" id=""/>
                    &nbsp; &nbsp;Banner: <input type="file" placeholder='Enter Event Banner' name="" id=""/> <br/><br/>
                    {/* <button onClick={handleAddVolunteer}>Add Volunteer</button> */}
                    <Button onClick={handleAddVolunteer} style={{float: 'right'}}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;