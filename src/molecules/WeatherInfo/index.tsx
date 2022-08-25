import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";

import * as S from "./styles";

interface IProps {
  type?: string; //TODO: Should translate to specific type
  temperature: number;
  mainWeather: string;
}

export const WeatherInfo: React.FC<IProps> = ({
  type,
  temperature,
  mainWeather,
}) => (
  <S.Wrapper>
    <WeatherIcon type="clouds" />
    <WeatherCondition temperature={temperature} mainWeather={mainWeather} />
  </S.Wrapper>
);
