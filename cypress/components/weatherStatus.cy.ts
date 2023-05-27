/// <reference types="cypress" />
import { GetWeatherStatus } from "../../src/pages/weather/weatherStatus";

describe("GetWeatherStatus", () => {
  it("should return the correct weather status based on the provided data", () => {
    // Test case for windy weather
    const windyData = {
      current_weather: {
        windspeed: 15,
      },
      hourly: {
        precipitation: [0.1, 0.2, 0.0, 0.3],
        cloudcover: [30, 35, 40, 45],
      },
    };
    const windyStatus = GetWeatherStatus(windyData);
    expect(windyStatus.rainy).to.equal(true);
    expect(windyStatus.cloudy).to.equal(false);
    expect(windyStatus.windy).to.equal(true);
    expect(windyStatus.sunny).to.equal(true);

    // Test case for rainy weather
    const rainyData = {
      current_weather: {
        windspeed: 5,
      },
      hourly: {
        precipitation: [0.3, 0.5, 0.2, 0.4],
        cloudcover: [50, 55, 60, 65],
      },
    };
    const rainyStatus = GetWeatherStatus(rainyData);
    expect(rainyStatus.rainy).to.equal(true);
    expect(rainyStatus.cloudy).to.equal(true);
    expect(rainyStatus.windy).to.equal(false);
    expect(rainyStatus.sunny).to.equal(false);

    // Test case for sunny weather
    const sunnyData = {
      current_weather: {
        windspeed: 8,
      },
      hourly: {
        precipitation: [0.0, 0.0, 0.0, 0.0],
        cloudcover: [20, 25, 30, 35],
      },
    };
    const sunnyStatus = GetWeatherStatus(sunnyData);
    expect(sunnyStatus.rainy).to.equal(false);
    expect(sunnyStatus.cloudy).to.equal(false);
    expect(sunnyStatus.windy).to.equal(false);
    expect(sunnyStatus.sunny).to.equal(true);

    // Test case for cloudy weather
    const cloudyData = {
      current_weather: {
        windspeed: 10,
      },
      hourly: {
        precipitation: [0.0, 0.0, 0.0, 0.0],
        cloudcover: [55, 60, 65, 70],
      },
    };
    const cloudyStatus = GetWeatherStatus(cloudyData);
    expect(cloudyStatus.rainy).to.equal(false);
    expect(cloudyStatus.cloudy).to.equal(true);
    expect(cloudyStatus.windy).to.equal(true);
    expect(cloudyStatus.sunny).to.equal(false);
  });
});
