
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material'; // Added Box for centering
import { getWeatherByCity } from './api';
import WeatherCard from './Components/WeatherCard';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #ffbf00, #ff6f61, #aaffa9, #11ffbd)' }}>
      <Typography variant="h3" gutterBottom style={{ textAlign: 'center', color: 'white' }}>WEATHER-APP</Typography>
      <Box width="100%" display="flex" justifyContent="center">
        <SearchBar onSearch={handleSearch} />
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </Container>
  );
};

export default App;

