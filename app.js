const getCity = () => {
    const input = document.getElementById('city-input')
    const inputValue = input.value
    input.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=7d8992a29d3e8ddb7e14922ca6ca837b`;
    fetch(url)
        .then(res => res.json())
        .then(data => getDisplayWeather(data))
}

const getDisplayWeather = city => {
    const weatherDiv = document.getElementById('weather')
    weatherDiv.innerHTML = `
        <h1>${city.name}</h1>
        <h3><span> Temp : ${(city.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
        <h5><span> Feels Like : ${(city.main.feels_like - 273.15).toFixed(2)}</span>&deg;C</h5>
        <h5><span> Minimum : ${(city.main.temp_min - 273.15).toFixed(2)}</span>&deg;C</53>
        <h5><span> Maximum : ${(city.main.temp_max - 273.15).toFixed(2)}</span>&deg;C</h5>
        <h5>Pressure : ${city.main.pressure} hPa</h5>
        <h5> Humidity : ${city.main.humidity}%</h5>
        
    `;
}