export async function changeCity(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
        .then(response => { 
            if(!response.ok){
                throw Error('No such city');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => fillData(data))
        .catch(error => {
            window.alert('Check your internet connection!');
        });
}

function fillData(data) {
    if(data.cod == 200){
        let cityHeader = document.getElementById('city-name');
        let weatherLabel = document.getElementById('weather-label');
        let weather = data.weather;
        cityHeader.innerHTML = data.name;
        weatherLabel.innerHTML = '';
        weather.forEach(w => {
            weatherLabel.innerHTML += ', ' + w.main;
        });
        weatherLabel.innerHTML = weatherLabel.innerHTML.slice(2);
        let temperatureLabel =  document.getElementById('temperature-label');
        temperatureLabel.innerHTML = (Math.round(data.main.temp - 273.15)) + '° C';
    }
}

