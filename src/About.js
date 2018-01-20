import React, { Component } from 'react';
import Weather from './Weather.js';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      weatherObj: {}
    };
  }

  searchWeather = e => {
    e.preventDefault();
    let zipCall = this.state.zipcode;
    console.log(zipCall);
    let weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCall + ",us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98";
    fetch(weatherApi).then(response => {
        return response.json();
    }).then(json => {
        this.setState({ weatherObj: json});
    }).catch(ex => {
        console.log("An error occured while parsing", ex);
    });
  }

  changeZipcode = e => {
    this.setState({ zipcode: e.target.value, error: '' });
    console.log(this.state.zipcode, "in the change zipcode");
  }

  render() {
    

    return (
      <div className="About">
        <form onSubmit={this.searchWeather}>
          <input
            type="text"
            className="input-field"
            onChange={this.changeZipcode}
            value={this.state.newZip}
            placeholder="Enter a zipcode to see the weather"
          />
          <input type="submit" value="Get Weather" />
        </form>
        <Weather weather={this.state.weatherObj} zip={this.state.zipcode} />
      </div>
    );
  }
}

export default About;
