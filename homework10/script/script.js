async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const geoResponse = await fetch(`https://geocode.maps.co/search?q=${city}`);
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      alert("City not found. Please enter a valid city name.");
      return;
    }

    const { lat, lon } = geoData[0];
    const weatherResponse = await fetch(
      `https://weather-api.com/forecast.json?&key=YOUR_API_KEY&days=1&q=${lat},${lon}`
    );
    const weatherData = await weatherResponse.json();

    const weatherOutput = document.getElementById("weatherOutput");
    weatherOutput.innerHTML = `
                    <h2>Weather in ${weatherData.location.name}, ${weatherData.location.country}</h2>
                    <p>Temperature: ${weatherData.current.temp_c}°C</p>
                    <p>Condition: ${weatherData.current.condition.text}</p>
                    <p>Humidity: ${weatherData.current.humidity}%</p>
                `;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data. Please try again later.");
  }
}
