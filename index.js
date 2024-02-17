const apikey = "7f75fdd0d1a0d06a6790b1b84b1aed47";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather_icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    }
    else if (data.weather[0].main == "Dizzle") {
        weatherIcon.src = "./images/dizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mistr.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}    
}
searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})


