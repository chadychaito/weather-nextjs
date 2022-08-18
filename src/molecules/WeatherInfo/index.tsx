import { WeatherCondition } from "../../atoms/WeatherCondition";
import { WeatherIcon } from "../../atoms/WeatherIcon";

import * as S from "./styles";

export const WeatherInfo = () => (
  <S.Wrapper>
    <WeatherIcon type="clouds" />
    <WeatherCondition />
  </S.Wrapper>
);
