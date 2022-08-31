import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";
import { getWeatherTypeById } from "../../utils/getWeatherTypeById";

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
  return (
    <S.Wrapper>
      <WeatherIcon type={getWeatherTypeById(todayWeather.weather[0].id)} />
      <WeatherCondition
        temperature={Math.round(todayWeather.main.temp)}
        descriptionWeather={todayWeather.weather[0].description}
      />
    </S.Wrapper>
  );
};
