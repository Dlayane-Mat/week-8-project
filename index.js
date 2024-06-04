function getCity(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchFormInput.value;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", getCity);
