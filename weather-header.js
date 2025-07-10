let newsURL =
  "https://newsapi.org/v2/everything?q=tesla&from=2025-06-10&sortBy=publishedAt&apiKey=26f101b47ea24571bc823724357f33d4";

let URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d5297e47b399787417abeb2ea972c2`;
let city = document.getElementById("city");
let temp = document.getElementById("current-temp");
let windChill = document.getElementById("current-windChill");
let humid = document.getElementById("current-humid");
let windSpeed = document.getElementById("current-windSpeed");
let description = document.getElementById("description");

// five day forecast vars
let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
let data4 = document.getElementById("data4");
let data5 = document.getElementById("data5");
let img;

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let wndChill =
      35.74 +
      0.6215 * jsObject.list[0].wind.deg -
      35.75 * Math.pow(jsObject.list[0].wind.speed, 0.16) +
      0.4275 *
        jsObject.list[0].main.temp *
        Math.pow(jsObject.list[0].wind.speed, 0.16);

    city.textContent = jsObject.city.name;
    description.textContent = `Currently: ${jsObject.list[0].weather[0].description}`;
    temp.textContent = `Tempurature: ${jsObject.list[0].main.temp}°f`;
    windChill.textContent = `Wind Chill: ${Math.round(wndChill)}°f`;
    humid.textContent = `Humidity: ${jsObject.list[0].main.humidity}`;
    windSpeed.textContent = `Wind Speed: ${jsObject.list[0].wind.speed}mph`;

    function weather(i) {
      if (jsObject.list[i].weather[0].main === "Clear") {
        img = document.createElement("img");
        img.src = "images/Sunny.png";
      }
      if (jsObject.list[i].weather[0].main === "Clouds") {
        img = document.createElement("img");
        img.src = "images/Cloudy.png";
      }
      if (jsObject.list[i].weather[0].main === "Rain") {
        img = document.createElement("img");
        img.src = "images/Rain.png";
      }
    }

    // five days forecast

    for (let i = 1; i <= 5; i++) {
      let tmp = document.createElement("p");
      let spd = document.createElement("p");
      spd.textContent = `Wind Speed: ${jsObject.list[i].wind.speed}mph`;
      tmp.textContent = `${jsObject.list[i].main.temp}°f`;

      if (i === 1) {
        weather(i);
        data1.appendChild(img);
        data1.appendChild(tmp);
        data1.appendChild(spd);
      }
      if (i === 2) {
        weather(i);
        data2.appendChild(img);
        data2.appendChild(tmp);
        data2.appendChild(spd);
      }
      if (i === 3) {
        weather(i);
        data3.appendChild(img);
        data3.appendChild(tmp);
        data3.appendChild(spd);
      }
      if (i === 4) {
        weather(i);
        data4.appendChild(img);
        data4.appendChild(tmp);
        data4.appendChild(spd);
      }
      if (i === 5) {
        weather(i);
        data5.appendChild(img);
        data5.appendChild(tmp);
        data5.appendChild(spd);
      }
    }
  });
