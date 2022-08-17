import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";

import * as S from "./styles";

export const WeatherInfo = () => (
  <S.Wrapper>
    <WeatherIcon type="a" />
    <WeatherCondition />
  </S.Wrapper>
);
