import './scss/style.scss';
import './scss/reset.scss';

import { getWeather } from './js/api.js';

const searchBtn = document.querySelector('.search-btn');
const input = document.querySelector('.search');
const form = document.querySelector('form');
const country = document.querySelector('.country');
const dateTime = document.querySelector('.date-time');
const message = document.querySelector('.message');
const condition = document.querySelector('.weather-condition');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
// const airQuality = document.querySelector('.air-quality');
const thermometer = document.querySelector('.thermo-meter-temp');
const thermometerMercuryLvl = document.querySelector('.most-inner-pipe');

function loading() {
  country.textContent = '....';
  dateTime.textContent = '....';
  message.textContent = '....';
  condition.textContent = '....';
  humidity.textContent = '....';
  windSpeed.textContent = '....';
}

function setData(data) {
  country.textContent = data.country;
  dateTime.textContent = data.time;
  message.textContent = '....';
  condition.textContent = `Condition: ${data.text}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  windSpeed.textContent = `kph: ${data.wind_kph} / mph: ${data.wind_mph}`;
  thermometer.textContent = `${data.temp_c}C`;
  thermometerMercuryLvl.style.height = `${data.temp_c}%`;
}

async function featchWeather(value) {
  try {
    loading();
    console.log('here');
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
    const data = await getWeather(value);
    setData(data);
  } catch {}
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('working');
  featchWeather(input.value);
});
