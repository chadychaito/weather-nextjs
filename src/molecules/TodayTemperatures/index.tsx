import { VerticalCard } from "../../atoms/VerticalCard";
import { getWeatherTypeById } from "../../utils/getWeatherTypeById";

import * as S from "./styles";

interface IProps {
  todayWeather: [
    {
      main: {
        temp: number;
      };
      dt_txt: string;
      weather: [
        {
          id: number;
        }
      ];
    }
  ];
}

export const TodayTemperatures: React.FC<IProps> = ({ todayWeather }) => {
  const getHourAndMinutes = (utcTxt: string): string => {
    const date = new Date(utcTxt);
    return `${date.getHours()}:00`;
  };

  return (
    <S.WrapperList>
      {todayWeather.map((weather, index) => (
        <VerticalCard
          active={index === 0}
          key={weather.dt_txt}
          hour={getHourAndMinutes(weather.dt_txt)}
          degree={Math.round(weather.main.temp)}
          iconType={getWeatherTypeById(weather.weather[0].id)}
        />
      ))}
    </S.WrapperList>
  );
};
