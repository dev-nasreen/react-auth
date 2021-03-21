import React from 'react';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';


const Destination = () => {
    const { transportType } = useParams();
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 col-10 mx-auto ">
                        <SearchForm transportType={transportType}></SearchForm>
                    </div>
                    <div className="  col-md-8 col-10 mx-auto  ">
                        <div className="map">
                            <div className="contact-maps" id="">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.8468073104864!2d90.94164306453462!3d24.212144284363738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756a1a00094be1d%3A0x51bd51184cfa4ef0!2sCharbari!5e0!3m2!1sen!2sbd!4v1601646415818!5m2!1sen!2sbd" width="95%" height="350" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0" title="Google Map"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;