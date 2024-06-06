import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

//THE WEATHER CARD WILL SHOW THE INFORMATION ABOUT THAT CITY THAT YOU HAVE ENTERED IN YOUR TEXTFIELD.

const WeatherCard = ({ weather }) => {
  return (
    <Card
      style={{
        margin: "20px",
        maxWidth: "300px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364, #f12711, #f5af19)",
        color: "white",
      }}
    >
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography variant="body1">
          {weather.weather[0].description}
        </Typography>
        <Typography variant="h6">TEMPERATURE:{weather.main.temp}°C</Typography>
        <Typography variant="body2">
          HUMIDITY: {weather.main.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
