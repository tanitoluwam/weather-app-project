//where request will be made to the api -- 
//openweathermap is a very good API for building weather apps
//we are using the fetch api to make our request

class Weather {
  constructor(city, state) {
    this.apiKey = "8ad77d3e5b890335f8686d708fbd6241";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state},${this.city}&APPID=${this.apiKey}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}