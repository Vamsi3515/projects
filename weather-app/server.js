const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const API_KEY = process.env.API_KEY;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', function(req, res) {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios.get(url)
        .then(response => {
            const weatherData = {
                city: response.data.name,
                temperature: (response.data.main.temp - 273.15).toFixed(1),
                condition: response.data.weather[0].description
            };
            console.log(weatherData);
            res.json(weatherData);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});