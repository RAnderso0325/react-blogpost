import React from 'react';

const Weather = (props) => {
    let baseUrl = 'http://openweathermap.org/img/w/';
    let iconType = '.png';
    if(Object.keys(props.weather).length > 0){    
        return <div className="Weather">
            <img src={baseUrl + props.weather.weather[0].icon + iconType} alt={props.weather.weather[0].description} />
            <h2>
              {" "}
              There is {props.weather.weather[0].description} in {props.weather.name}
            </h2>
            <h6>(zipcode: {props.zip})</h6>
            <h3>
              Current Temp is: {Math.floor(props.weather.main.temp)}{" "}
              &deg;F
            </h3>
            <h4>
              High: {Math.floor(props.weather.main.temp_max)} &deg;F | Low: {Math.floor(props.weather.main.temp_min)} &deg;F
            </h4>
          </div>;
    }else{
        return(
            <div>
             <h1>Enter a zipcode for the weather!</h1>
            </div>
        )
    }
    
}

export default Weather;