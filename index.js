function searchCity(city){
    let apiKey = "0bd4693b39a661e4b0370fe772t7a9o3";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(updateWeather);
}



function getCity(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchFormInput.value;
searchCity(searchFormInput.value);
}






let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", getCity);
