import './scss/style.scss';
import './scss/reset.scss';

import { getWeather } from './js/api.js';

const weatherImg = document.querySelector('.weather-img');
const input = document.querySelector('.search');
const form = document.querySelector('form');
const country = document.querySelector('.country');
const dateTime = document.querySelector('.date-time');
const condition = document.querySelector('.condition');
const fahrenheit = document.querySelector('.fahrenheit');
const celsius = document.querySelector('.celsius');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const thermometer = document.querySelector('.thermo-meter-temp');
const thermometerMercuryLvl = document.querySelector('.most-inner-pipe');

function setDateTime(value) {
  const data = new Date(value);
  return `${data.getDay()}.${data.getDate()}.${data.getFullYear()} / ${data.getHours()}:${data.getMinutes()}`;
}

function loading() {
  country.textContent = '....';
  dateTime.textContent = '....';
  condition.textContent = '....';
  fahrenheit.textContent = '....';
  celsius.textContent = '....';
  humidity.textContent = '....';
  windSpeed.textContent = '....';
}

function setData(data) {
  country.textContent = `${data.name}, ${data.region} (${data.country})`;
  dateTime.textContent = setDateTime(data.time);
  condition.textContent = `${data.text}`;
  fahrenheit.textContent = `\u00B0C ${data.temp_c}`;
  celsius.textContent = `\u00B0F ${data.temp_f}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  windSpeed.textContent = `kph: ${data.wind_kph} / mph: ${data.wind_mph}`;
  thermometer.textContent = `${data.temp_c}`;
  thermometerMercuryLvl.style.height = `${data.temp_c}%`;
  weatherImg.style.backgroundImage = `url(${data.icon})`;
}

async function featchWeather(value) {
  try {
    loading();
    // console.log('here');
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
    const data = await getWeather(value);
    setData(data);
  } catch {}
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log('working');
  featchWeather(input.value);
});
