import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import volunteerDetails from '../../fakedata/fakeData'
import Header from '../Header/Header';
import VolunteerType from '../VolunteerType/VolunteerType';

const Home = () => {
    // const volunteer = volunteerDetails;
    const [volunteer, setVolunteer] = useState([]);

    useEffect( () => {
        fetch('https://safe-river-91645.herokuapp.com/volunteers')
        .then(response => response.json())
        .then(data => setVolunteer(data))
    })
    return (
        <div style={{backgroundColor: '#f8fafc'}}>
            <Container>
            <Header></Header>
            <div className='row'>
                {
                    volunteer.map(value => <VolunteerType value={value}></VolunteerType>)
                }
            </div>
            </Container>
        </div>
    );
};

export default Home;