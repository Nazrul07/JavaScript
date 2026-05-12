// This script uses two Open-Meteo endpoints:
// 1) Geocoding API to convert city name -> latitude,longitude
//    https://geocoding-api.open-meteo.com/v1/search?name=City&count=1
// 2) Forecast API to get current weather + hourly humidity
//    https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current_weather=true&hourly=relativehumidity_2m&timezone=auto

// Get references to DOM elements
const input = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherIcon = document.getElementById('weather-icon');
const tempEl = document.getElementById('temp');
const cityEl = document.getElementById('city');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');

// Map Open-Meteo weather codes to local images (simple mapping)
const weatherCodeMap = {
  0: 'images/clear.png', // Clear sky
  1: 'images/clear.png', // Mainly clear
  2: 'images/clouds.png', // Partly cloudy
  3: 'images/clouds.png', // Overcast
  45: 'images/clouds.png', // Fog
  48: 'images/clouds.png',
  51: 'images/rain.png',
  53: 'images/rain.png',
  55: 'images/rain.png',
  61: 'images/rain.png',
  63: 'images/rain.png',
  65: 'images/rain.png',
  71: 'images/snow.png',
  73: 'images/snow.png',
  75: 'images/snow.png',
  80: 'images/rain.png',
  81: 'images/rain.png',
  82: 'images/rain.png',
};


const round = (val) => Math.round(val);

// Fetch coordinates (lat, lon) for a city name using Open-Meteo geocoding
const fetchCoordinates = (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  cityEl.textContent = 'Searching...';

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.results || data.results.length === 0) {
        throw new Error('City not found');
      }
      const place = data.results[0];
      return { name: `${place.name}, ${place.country}`, lat: place.latitude, lon: place.longitude };
    });
}

// Fetch weather (current + hourly humidity) for coordinates
const fetchWeatherByCoords = (lat, lon) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`;
  return fetch(url).then(res => res.json());
};

// Orchestrator: given a city name, fetch coords then weather and update UI
const fetchAndShowWeather = (city) => {
  if (!city) return;
  // show loading state
  cityEl.textContent = 'Loading...';
  tempEl.textContent = '';
  humidityEl.textContent = '';
  windEl.textContent = '';

  fetchCoordinates(city)
    .then(({ name, lat, lon }) => {
      return fetchWeatherByCoords(lat, lon).then(data => ({ name, data }));
    })
    .then(({ name, data }) => {
      updateUIFromOpenMeteo(name, data);
    })
    .catch(err => {
      alert(err.message);
      cityEl.textContent = '—';
      tempEl.textContent = '';
    });
}

// Update UI using the Open-Meteo response shape
function updateUIFromOpenMeteo(placeName, data) {
  const cw = data.current_weather;
  if (!cw) {
    throw new Error('No current weather data');
  }

  const temp = Math.round(cw.temperature) + '°C';
  // Open-Meteo's current_weather.windspeed is returned in km/h by default
  // so we use it directly and show it rounded.
  const wind = round(cw.windspeed) + ' km/h';

  // humidity is provided in hourly arrays; try to find the best matching index
  let humidity = '—';
  if (data.hourly && data.hourly.time && data.hourly.relativehumidity_2m) {
    const times = data.hourly.time;
    const humidities = data.hourly.relativehumidity_2m;
    let idx = times.indexOf(cw.time);
    if (idx === -1) {
      // if exact match fails, find nearest time by absolute difference
      const target = new Date(cw.time).getTime();
      let bestDiff = Infinity;
      for (let i = 0; i < times.length; i++) {
        const t = new Date(times[i]).getTime();
        const diff = Math.abs(t - target);
        if (diff < bestDiff) { bestDiff = diff; idx = i; }
      }
    }
    if (idx !== -1 && humidities[idx] != null) humidity = humidities[idx] + '%';
  }

  cityEl.textContent = placeName;
  tempEl.textContent = temp;
  humidityEl.textContent = humidity;
  windEl.textContent = wind;

  const code = cw.weathercode;
  if (code != null && weatherCodeMap[code]) {
    weatherIcon.src = weatherCodeMap[code];
    weatherIcon.alt = 'Weather icon';
  } else {
    weatherIcon.src = 'images/rain.png';
    weatherIcon.alt = 'Weather icon';
  }
}

// Event listeners: click and Enter key
searchBtn.addEventListener('click', () => {
  const city = input.value.trim();
  fetchAndShowWeather(city);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const city = input.value.trim();
    fetchAndShowWeather(city);
  }
});

// Load a default city on first open
fetchAndShowWeather('New York');
