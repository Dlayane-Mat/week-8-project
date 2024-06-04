function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature =  response.data.temperature.current;
    let cityElement = document.querySelector("#weather-city");
    let descriptionElement = document.querySelector("#weather-description");
let humidityElement = document.querySelector("#current-humidity")
let windspeedElement = document.querySelector("#current-windspeed");


    cityElement.innerHTML = response.data.city;
    windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
descriptionElement.innerHTML =response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
 temperatureElement.innerHTML = Math.round(temperature);
    
    
}


function searchCity(city){
    let apiKey = "0bd4693b39a661e4b0370fe772t7a9o3";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(updateWeather);
}



function getCity(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-input");
    
searchCity(searchFormInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", getCity);

searchCity("Limpopo");
