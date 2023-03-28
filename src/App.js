import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';




function App() {
  return (
    <div className="App">
      <Countries></Countries> 
    </div>
  );
}

// function LoadCountries(){
//   const [countries,setCountries]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data));

//   },[])
//   return (
//     <div>
//       <h1>Visiting all the countries of the world</h1>
//       <h3>Number Of Countries : {countries.length} </h3>
//       {
//         countries.map(country=> <Country name={country.name.common} capital={country.capital} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return (
//     <div>
//       <img src="" alt="" />
//       <h2>Name : {props.name}</h2>
//       <h4>Capital : {props.capital}</h4>
//       <p>Population : {props.population}</p>
//     </div>
//   )
// }

export default App;
