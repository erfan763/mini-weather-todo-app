import { IWeatherType } from "api/weather";
import { useState } from "react";

export const GetWeatherStatus = (data?: IWeatherType) => {
  let status = {
    rainy: false,
    cloudy: false,
    windy: false,
    sunny: false,
  };

  // Check wind speed
  if (data && data?.current_weather?.windspeed >= 10) {
    status = { ...status, windy: true };
    console.log("It is windy.");
  }

  // Check precipitation
  const precipitation = data && data?.hourly?.precipitation;
  const sumOfPrecipitation = precipitation?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avgOfPrecipitation = precipitation && sumOfPrecipitation && sumOfPrecipitation / precipitation?.length;
  if (avgOfPrecipitation && avgOfPrecipitation > 0.01) {
    status = { ...status, rainy: true };
    console.log("It is rainy.");
  }
  console.log("====================================");
  console.log(avgOfPrecipitation);
  console.log("====================================");

  // Check cloud cover
  const cloudCover = data?.hourly?.cloudcover;
  const sumOfCloudCover = cloudCover && cloudCover.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avgOfCloudCover = sumOfCloudCover && sumOfCloudCover / cloudCover.length;
  if (avgOfCloudCover && avgOfCloudCover < 40) {
    status = { ...status, sunny: true };
    console.log("It is sunny.");
  } else {
    status = { ...status, cloudy: true };
    console.log("It is cloudy.");
  }
  return status;
};
