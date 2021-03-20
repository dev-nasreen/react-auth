import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Search.css';
import Fakedata from '../../FakeData/vehicle.json'
import ShowDetails from '../ShowDetails/ShowDetails';

const SearchForm = ({transportType}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [transportCategory, setTransportCategory] = useState([]);
    const { register, handleSubmit,  errors } = useForm();
    const [showDetail, setShowDetail] = useState(false);

  const onSubmit = data =>{
    setShowDetail(true);
  };

  useEffect(() =>{
      const transports = Fakedata.filter(singleTransport => singleTransport.transportType === transportType );
      
      setTransportCategory(transports);
    },[transportType])

    console.log(transportCategory);
  
  return (
    
      <div className="visit-form">

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="from" ref={register({ required: true })} placeholder="From"/>
                {errors.from && <span className="error">Please give the location name</span>}
                <input name="to" ref={register({ required: true })} placeholder="To"/>
                {errors.to && <span className="error">Please give the location name</span>}
                <input name="date" type="date" ref={register({ required: true })} placeholder="To"/>
                {errors.date && <span className="error">This phone No. is required</span>}
                <input type="submit" />

            </form>

            { showDetail &&
                transportCategory.map(detail=><ShowDetails detail={detail} key={detail.id}></ShowDetails>)
            }
    </div>
    
 
);
};






export default SearchForm;