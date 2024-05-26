const API_KEY = '90aa7038a89840eeb84180335241405';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

function handleError(error, message) {
  console.error(message, error);
}

async function getWeather(location) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${location}`;

  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      const errorMessage = `Failed to fetch weather data for ${location}`;
      handleError(response.statusText, errorMessage);
      throw new Error(errorMessage);
    } else {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    handleError(error, 'Error fetching weather data');
    throw error;
  }
}

module.exports = { getWeather };
