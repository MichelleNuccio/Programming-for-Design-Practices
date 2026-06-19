console.log("this works");

const API_KEY = config.WEATHER_API_KEY;

function getWeatherData(zip) {
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data =>{
      
      let local_weather_data = data;
      let weather_in_celsius = Math.round(
      local_weather_data.main.temp - 273
    );   
    
    let WEATHER_ICON = local_weather_data.weather[0].icon;
      CITY_NAME.textContent = local_weather_data.name;
      CITY_TEMP.textContent = weather_in_celsius + "°C";
      console.log(WEATHER_ICON);
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`);
    });
      
    form.reset();
    input.focus();
}

const searchButton = document.querySelector(".search-button");
let input = document.querySelector(".zipcode");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature"); 
let image = document.querySelector("img");

function getZipCode(e) {
  e.preventDefault();

  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

searchButton.addEventListener('click', getZipCode);