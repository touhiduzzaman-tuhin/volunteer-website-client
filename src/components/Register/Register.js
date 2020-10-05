import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './Register.css';
import logo from '../../images/Group 1329.png';
import { Link, useParams } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerList from '../VolunteerList/VolunteerList';
import RegisterVolunteerList from '../RegisterVolunteerList/RegisterVolunteerList';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  }));

const Register = () => {

    const {volunteerType} = useParams()

    const [eventDetails, setEventDetails] = useState([]);

    useEffect( () => {
        fetch('https://safe-river-91645.herokuapp.com/volunteer/'+volunteerType)
        .then(response => response.json())
        .then(data => setEventDetails(data))
    }, [volunteerType])

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState({
        registerDate : new Date() 
    });

    const handleDateChange = (date) => {
        const newDate = {...selectedDate};
        newDate.registerDate = date;
        setSelectedDate(newDate);
    };

    const handleRegister = () => {
        const registerInfo = {...loggedInUser, ...selectedDate, volunteerType, ...eventDetails}
        fetch('https://safe-river-91645.herokuapp.com/addRegisterVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
            })
            .then(response => response.json())
            .then(data => {
            if(data){
                alert('Your Registration successfully');
            }
        })
        // fetch('https://safe-river-91645.herokuapp.com/registerVolunteer', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(registerInfo)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }

    return (
        <div align="center">
            <img className='logo-image' src={logo} alt=""/>
            <div className='main-form-style'>
                <h3 align='center'>Register as a Volunteer</h3>
                <form className='registration-form'>
                    <input type="text" placeholder="Full Name" defaultValue={loggedInUser.userName} required/> <br/>
                    <input type="text" placeholder="User Name or Email" defaultValue={loggedInUser.email} required/> <br/>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                value={selectedDate.registerDate}
                                onChange={handleDateChange}
                                className={classes.textField}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />                                             
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <input type="text" placeholder="Description" defaultValue= "" required/> <br/>
                    <input type="text" placeholder="Organize Book at library" defaultValue={volunteerType} required/> <br/>

                    <button className='register-button' onClick={handleRegister}>
                        <Link to='/registerVolunteerList' style={{color: 'black'}}>
                            Registration
                        </Link>                    
                    </button>
                </form>
            </div>
            {/* <RegisterVolunteerList></RegisterVolunteerList> */}
        {/* <VolunteerList></VolunteerList>     */}
        </div>
    );
};

export default Register;