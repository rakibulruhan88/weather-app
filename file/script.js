const apiKey = "745063f2e79aec9e7f2706132fea0b31";
const  apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBtn = document.querySelector(".search button");
let inputField = document.querySelector(".search input");
let weatherIcon = document.querySelector(".weather img");


async function cheakWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/wind.png"
    }
}


searchBtn.addEventListener("click", ()=> {
    cheakWeather(inputField.value);
    console.log(cheakWeather);

});






