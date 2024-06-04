function getCity(event){
    event.preventDefault();
    let searchFormElement = document.querySelector("#search-form");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchFormElement.value;

}






let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", getCity);
