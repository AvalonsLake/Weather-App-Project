let URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d5297e47b399787417abeb2ea972c2`;
let city = document.getElementById("city");
let temp = document.getElementById("current-temp");
let windChill = document.getElementById("current-windChill");
let humid = document.getElementById("current-humid");
let windSpeed = document.getElementById("current-windSpeed");
let description = document.getElementById("description");

// five day forecast var

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;
    console.log(jsObject);

    city.textContent = jsObject.city.name;
    description.textContent = `Currently: ${jsObject.list[0].weather[0].description}`;
    temp.textContent = `Tempurature: ${jsObject.list[0].main.temp}°f`;
    windChill.textContent = `Wind Chill: ${jsObject.list[0].main.temp}°f`;
    humid.textContent = `Humidity: ${jsObject.list[0].main.humidity}`;
    windSpeed.textContent = `Wind Speed: ${jsObject.list[0].wind.speed}mph`;
  });
