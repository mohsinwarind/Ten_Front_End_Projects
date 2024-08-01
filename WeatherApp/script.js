const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
document.getElementById('fetchWeather').addEventListener('click', function () {
    const apiKey = document.getElementById('apiKey').value;
    const city = document.getElementById('city').value;

    if (apiKey && city) {
        fetchWeather(apiKey, city);
    } else {
        alert('Please enter both API key and city name.');
    }
});

function fetchWeather(apiKey, city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please check your API key and city name.');
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');

    if (data.cod === 200) {
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherResult.innerHTML = weatherInfo;
    } else {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
    }
}
