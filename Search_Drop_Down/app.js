const Cities = [];

let display = document.getElementById('display');
let chosencity = document.getElementById('chosenCity');

document.getElementById('search').addEventListener("input", () => {
    display.innerHTML = ``;
    let searchval = document.getElementById('search').value;
    let filteredCities = Cities.filter((city) => {
        if (city.trim().includes(searchval.trim())) {
            return city;
        }
    })

    filteredCities.forEach((city) => {
        display.innerHTML += `<div class='city' value='${city}'>${city}</div>`;
    })

    let allcities = document.querySelectorAll('.city');
    allcities.forEach((selectedcity) => {
        selectedcity.addEventListener('click', () => {
            chosencity.innerHTML = `The selected city is: ${selectedcity.getAttribute('value')}`
        })
    })
})




let addcity = () => {
    let city = document.getElementById('cityname').value;
    Cities.push(city);
}