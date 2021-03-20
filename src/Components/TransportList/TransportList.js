import React from 'react';
import './TransportList.css';
import peopleIcon from '../images/peopleIcon.png'

const TransportList = ({list}) => {
    const {transportType, rent, passengerCapacity, img } = list;
    return (
        <div className="list-box">
           <img src={img} alt="" style={{height:'30px'}}/> 
            <h2>{transportType}</h2>
            <h3><img src={peopleIcon} alt="people"style={{height:'20px'}}/>{passengerCapacity}</h3>
            <h3>${rent}</h3>

        </div>
    );
};

export default TransportList;