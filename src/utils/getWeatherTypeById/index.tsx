import { IconType } from "../../atoms/WeatherIcon";

export const getWeatherTypeById = (weatherId: number): IconType => {
  switch (true) {
    case weatherId >= 200 && weatherId <= 232:
      return "thunderstorm";
    case weatherId >= 300 && weatherId <= 321:
      return "rain";
    case weatherId >= 500 && weatherId <= 531:
      return "light_rain";
    case weatherId >= 600 && weatherId <= 622:
      return "snow";
    case weatherId >= 700 && weatherId <= 781:
      return "mist";
    case weatherId === 800:
      return "clear";
    case weatherId >= 801 && weatherId <= 804:
      return "clouds";
    default:
      return "clear";
  }
};
