import React from 'react';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';


const Destination = () => {
    const {transportType} = useParams();
    return (
        <div className="container">
    <div className="row">
      <div className="col-10  col-md-4 ">
            <SearchForm transportType={transportType}></SearchForm>
            
        
      </div>
      <div className="col-10  col-md-8 ">
      <h1>this is destination page.</h1>
      </div>
    </div>
</div>
    );
};

export default Destination;