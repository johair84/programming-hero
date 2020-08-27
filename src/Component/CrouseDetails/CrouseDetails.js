import React from 'react';
import './CrouseDetails.css'

const CrouseDetails = (props) => {
    
    return (
        <div className="crouseDetails">
            <div>
            <h4>{props.crouseDetails.name}</h4>
            <h3>Price : ${props.crouseDetails.price}</h3>
            <button onClick={() => props.handleEnroll(props.crouseDetails)} className="enrollBtn">Enroll Now</button>
            </div>
            
           
            
            
        </div>
    );
};

export default CrouseDetails;