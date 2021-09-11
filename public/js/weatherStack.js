const searchInput = document.querySelector("#search-city");
const searchForm = document.querySelector('#search-form');
const searchBtn = document.querySelector('#search-city-btn');



    const params = new URLSearchParams({
        access_key: '484c5666aba43d6697bfaab408e6739f',
        query: 'Detroit',
        units: 'f'
    })



let apiUrl = `http://api.weatherstack.com/current?${params}`;

getWeatherText(apiUrl);


async function getWeatherText() {
    let weatherObject = await fetch(`http://api.weatherstack.com/current?${params}`);
    let weatherText = await weatherObject.text();
    console.log(weatherObject);
    console.log(weatherText);
    parseWeather(weatherText);
}

let parseWeather = function (weatherText) {
    let weatherJSON = JSON.parse(weatherText);
    console.log(weatherJSON);
    let description = weatherJSON.current.weather_descriptions[0];
    let feelsLike = weatherJSON.current.feelslike;
    let temp = weatherJSON.current.temperature;
    let precip = weatherJSON.current.precip;
    let location = weatherJSON.location.name;
    let humidity = weatherJSON.current.humidity;
    displayWeatherDay(description, feelsLike, temp, precip,  location, humidity);
}


let displayWeatherDay = function ( description, feelsLike, temp, precip,  location, humidity) {
    let out = "<div class='weatherDay col s5'>" +
    "<div class='card'><h6 class='teal-text darken-2 center-align'> Today's Weather</h6><br>" +
    "<div id='search-form'>" +
    "<form id='search-form' class='form' placeholder='City'>" +
    "<input class='form-input weather search' type='text' id='search-input' placeholder='Detroit' class='form-control'/>" +
    "<button class='btn btn-primary' id='search-city-btn' value='submit' type='submit' name='action'>Search</button></form></div></div></div>" +
    "<div class='col s2'><div class=' card'><h6 class='teal-text darken-2 center-align'><br> Location:<br><br> " + location + "<br><br>" + description + "<br><br></h6></div></div>" +
    "<div class='col s2'><div class= 'card'><h6 class='teal-text darken-2 center-align'><br>Temperature:<br><br> " + temp + "F<br><br>" + "Feels like: " + feelsLike + "<br><br>" +"</h6></div></div>" +
    "<div class='col s2'><div class=' card'><h6 class='teal-text darken-2 center-align'><br>Precipitation: " + precip + "<br><br>" + "Humidity: <br><br>" + humidity + "<br>"+"<br></h6></div></div>";
    document.getElementById("forecast").innerHTML += out;
}

function handleSearchFormSubmit(e) {
    // Don't continue if there is nothing in the search form
    if (!searchInput.value) {
        console.log(error);
      return;
    }
  
    e.preventDefault();
    const search = searchInput.value.trim();
    console.log(search);
    setParams(search);


}
  
  

document.getElementById('#weatherWid'); 
searchBtn.addEventListener('click', handleSearchFormSubmit);
searchForm.addEventListener('submit', handleSearchFormSubmit);       


