const newsURL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=26f101b47ea24571bc823724357f33d4";
// 26f101b47ea24571bc823724357f33d4

const URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=64d5297e47b399787417abeb2ea972c2`;
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

// news vars
let headline = document.getElementById("headline");
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");
let article3 = document.getElementById("article3");
let article4 = document.getElementById("article4");
let article5 = document.getElementById("article5");

// Weather Page call
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
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

// News API call
fetch(newsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let pic = document.createElement("img");
    pic.src = jsObject.articles[1].urlToImage;

    let link1 = document.createElement("a");
    link1.href = jsObject.articles[1].url;
    link1.textContent = jsObject.articles[1].title;

    let titleH = document.createElement("h2");

    titleH.appendChild(link1);
    headline.appendChild(pic);
    headline.appendChild(titleH);

    for (let i = 6; i <= 10; i++) {
      let title = document.createElement("h2");
      let link = document.createElement("a");
      let img = document.createElement("img");
      let des = document.createElement("p");

      des.className = "description";
      link.href = jsObject.articles[i].url;
      link.textContent = jsObject.articles[i].title;
      title.appendChild(link);

      img.src = jsObject.articles[i].urlToImage;
      des.textContent = jsObject.articles[i].description;

      if (i === 6) {
        article1.appendChild(title);
        article1.appendChild(img);
        article1.appendChild(des);
      }
      if (i === 7) {
        article2.appendChild(title);
        article2.appendChild(img);
        article2.appendChild(des);
      }
      if (i === 8) {
        article3.appendChild(title);
        article3.appendChild(img);
        article3.appendChild(des);
      }
      if (i === 9) {
        article4.appendChild(title);
        article4.appendChild(img);
        article4.appendChild(des);
      }
      if (i === 10) {
        article5.appendChild(title);
        article5.appendChild(img);
        article5.appendChild(des);
      }
    }
  });
