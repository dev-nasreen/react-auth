import React from 'react';

const ShowDetails = ({detail}) => {
    const {transportType, rent, passengerCapacity, img } = detail;
    return (
        <div >
           <img src={img} alt="" style={{height:'40px'}}/> 
            <h2>{transportType}</h2>
            <h3>{rent}</h3>

        </div>
    );
};

export default ShowDetails;