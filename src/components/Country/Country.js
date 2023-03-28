import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name,area,population,region,flags,capital}=props.country;
//    console.log(props.country)
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
           <h1>Name : {name.common}</h1>
           <h2>Capital : {capital}</h2>
           <h3>Region : {region}</h3>
           <h4>Area : {area}</h4>
           <h5>Population : {population}</h5>
        </div>
    );
};

export default Country;