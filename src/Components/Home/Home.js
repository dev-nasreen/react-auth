import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import fakeData from "../../fakeData/vehicleCategory.json"
import './Home.css';

const Home = () => {
 const [transports, setTransports] = useState([]);
    useEffect(()=> {
        setTransports(fakeData);
    },[])


    return (
        <div>
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-10  mx-auto">
                        <div className="row gy-4 gx-4 ">
                        {
                            transports.map(transport => <Transport key={transport.id} transport={transport}></Transport>)
                        }
                     </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;