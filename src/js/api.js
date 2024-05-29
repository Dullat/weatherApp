const API_KEY = '90aa7038a89840eeb84180335241405';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

function handleError(error, message) {
  return {
    ok: false,
    error,
    message,
  };
}

function createObject(data) {
  return {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    time: data.location.localtime,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    isday: data.current.is_day,
    text: data.current.condition.text,
    icon: data.current.condition.icon,
    wind_mph: data.current.wind_mph,
    wind_kph: data.current.wind_kph,
    humidity: data.current.humidity,
    cloud: data.current.cloud,
    feelslike_c: data.current.feelslike_c,
    feelslike_f: data.current.feelslike_f,
    ok: true,
  };
}

async function getWeather(location) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${location}`;

  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      const errorMessage = `Failed to fetch weather data for ${location}`;
      throw new Error(errorMessage);
    } else {
      const data = await response.json();
      // console.log(data);
      // console.log(createObject(data));
      return createObject(data);
    }
  } catch (error) {
    return handleError(error, 'Error fetching weather data');
  }
}

module.exports = { getWeather };
