//main js file

//init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change locationevent
document.getElementById("w-change-btn").addEventListener("click", (e) =>{
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //change location
  weather.changeLocation(state, city);

  //set location in LS
  storage.setLocationData(city , state);

  //Get and display weather
  getWeather();

  //close modal
  $("#locModal").modal("hide");

});
//to get the modal to close, we have to use jQuery.
//This is because bootstrap depends on jQuery

 

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paints(results);
     
    })
    .catch(err => console.log(err));
}