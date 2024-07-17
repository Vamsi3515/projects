document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
  });
  
  function getWeather(city) {
    fetch(`http://localhost:3000/weather?city=${city}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const weatherResult = document.getElementById('weatherResult');
        if (data.error) {
          weatherResult.innerHTML = `<p>${data.error}</p>`;
        } else {
          weatherResult.innerHTML = `
            <h2>Weather in ${data.city}</h2>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Condition: ${data.condition}</p>
          `;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }  