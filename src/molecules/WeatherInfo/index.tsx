import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";

import * as S from "./styles";

interface IProps {
  type?: string; //TODO: Should translate to specific type
  temperature: number;
  descriptionWeather: string;
}

export const WeatherInfo: React.FC<IProps> = ({
  type,
  temperature,
  descriptionWeather,
}) => (
  <S.Wrapper>
    <WeatherIcon type="clouds" />
    <WeatherCondition
      temperature={temperature}
      descriptionWeather={descriptionWeather}
    />
  </S.Wrapper>
);
