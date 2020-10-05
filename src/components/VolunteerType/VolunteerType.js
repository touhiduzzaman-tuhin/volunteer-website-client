import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerType.css';

const VolunteerType = (props) => {
    const {name, picture} = props.value;
    return (
        <div className="col-md-3 volunteer-type">
            <button className='button-volunteer'>
                <Link style={{textDecoration: 'none'}} to={`register/${name}`}>
                    <img className='volunteer-type-image' src={picture} alt=""/>
                    <h5>{name}</h5>
                </Link>
            </button>
        </div>

        
    );
};

export default VolunteerType;

