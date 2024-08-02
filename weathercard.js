import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  // Map weather conditions to corresponding images
  const weatherImages = {
    Clear:"https://www.istockphoto.com/photo/bright-sun-shines-on-the-blue-sky-with-with-clouds-over-the-mountain-gm1650856310-534101601",
    Cloud:"https://www.istockphoto.com/photo/dramatic-stormy-dark-cloudy-sky-over-sea-gm522305524-91559237",
    Rain: 'https://www.istockphoto.com/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection-gm1225022383-360427136',
    // Add more as needed
    Drizzle:"https://www.istockphoto.com/photo/rainy-landscape-gm498063665-42184378",
  };

  // Get the corresponding image URL based on weather condition
  const weatherImage = weatherImages[weather[0].main] || 'https://example.com/default-image.jpg';

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <img src={weatherImage} alt={weather[0].main} style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
      <h3>{weather[0].description}</h3>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
    </div>
  );
};

export default WeatherCard;
