import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const[data,setData] = useState({});
  
  const[location,setLocation]=  useState('');
  
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1a54c211412222605386b1dd7ccd0829`;
  
  const searchLocation = event =>{
    if (event.key ==='Enter') {
   axios.get(url).then((response) => {
    console.log("is this working");
      setData(response.data);
      console.log(response.data);
    });
   // setLocation('');

    };
  };
const tempInC = (data.main.temp - 32) * 5/9;

    return (
    <div className="app">
      <div className="search">
        <input
         value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
         type="text"/> 
          </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p> </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp}F or {tempInC}C </h1>: null} </div>
      <div className="description">
      {data.weather ? <p>{data.weather[0].main}</p> :null }  </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className='bold'>What it feels like </p>
          {data.main ? <p>{data.main.feels_like}F</p> :null}
          </div>
      <div className="humidity">
            <p className='bold'>Humidity</p>
            {data.main ? <p>{data.main.humidity}</p>:null}
            </div>
        <div className="wind">
         <p className='bold'>Wind Speed</p>
         {data.wind ? <p>{data.wind.speed}</p>:null}
         </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
