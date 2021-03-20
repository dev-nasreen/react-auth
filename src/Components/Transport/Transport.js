import React from 'react';
import { Link } from "react-router-dom";

const Transport = ({ transport }) => {
    const { transportType, img } = transport;
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <Link to={`/destination/${transportType}`}>
                    <div class="card my-card text-center" >
                        <img src={img} class="card-img-top card-img" alt="logo" />
                        <div class="card-body">
                            <h5 class="card-title">{transportType} </h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Transport;