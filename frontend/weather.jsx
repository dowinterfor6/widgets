import React from 'react'

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`)
    }
  }
  return parts.join('&');
}

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    let url = "https://api.openweathermap.org/data/2.5/weather?";
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }
    url += toQueryString(params);
    const apiKey = '625f0eccdd120e446a1e548737229cde';
    url += `&APPID=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = weather.main.temp - 273.15;
      this.icon = <div></div>
      if (weather.rain) {
        this.icon = <i className="fas fa-cloud-showers-heavy"></i>;
      } else if (weather.clouds.all >= 20) {
        this.icon = <i className="fas fa-cloud"></i>;
      } else {
        this.icon = <i className="far fa-sun"></i>;
      }
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div id="loading">loading weather...</div>
    }
    return (
      <div id="weather-widget">
        <h2>Weather</h2>
        <div id="weather-display">
          <div id="weather-city">
            {content}
          </div>
          <div id="weather-icon">
            {this.icon}
          </div>
        </div>
      </div>
    )
  }
}