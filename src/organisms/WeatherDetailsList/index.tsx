import { WeatherDetails } from "../../molecules/WeatherDetails";

import * as S from "./styles";

interface IProps {
  todayWeather: {
    main: {
      humidity: number;
    };
    wind: {
      speed: number;
    };
    rain?: {
      "3h"?: number;
    };
  };
}

export const WeatherDetailsList: React.FC<IProps> = ({ todayWeather }) => {
  return (
    <S.ListWrapper>
      <WeatherDetails
        title="chuva"
        value={
          todayWeather.rain?.["3h"]
            ? `${Math.round(todayWeather.rain?.["3h"])}mm`
            : "0 mm"
        }
      />
      <WeatherDetails
        title="vento"
        value={`${Math.round(todayWeather.wind.speed)}km/h`}
      />
      <WeatherDetails
        title="umidade"
        value={`${todayWeather.main.humidity}%`}
      />
    </S.ListWrapper>
  );
};
