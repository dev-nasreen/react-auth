import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import fakeData from "../../fakeData/vehicleCategory.json"
import './Home.css';

const Home = () => {
    const [transports, setTransports] = useState([]);
    useEffect(() => {
        setTransports(fakeData);
    }, [])


    return (
        <div>
            <div className="container">
                <div className="row" style={{marginTop:'100px'}}>
                    {
                        transports.map(transport => <Transport key={transport.id} transport={transport}></Transport>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;