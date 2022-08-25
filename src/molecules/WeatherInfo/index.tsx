import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";

import * as S from "./styles";

interface IProps {
  todayWeather: {
    main: {
      temp: number;
    };
    weather: [
      {
        id: number;
        description: string;
      }
    ];
  };
}

export const WeatherInfo: React.FC<IProps> = ({ todayWeather }) => {
  console.log("?", todayWeather);

  const transformIdToWeatherType = (weatherId: number) => {
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
    }
  };

  return (
    <S.Wrapper>
      <WeatherIcon
        type={transformIdToWeatherType(todayWeather.weather[0].id)}
      />
      <WeatherCondition
        temperature={Math.round(todayWeather.main.temp)}
        descriptionWeather={todayWeather.weather[0].description}
      />
    </S.Wrapper>
  );
};
