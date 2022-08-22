import { WeatherDetails } from "../../molecules/WeatherDetails";

import * as S from "./styles";

export const WeatherDetailsList = () => (
  <S.ListWrapper>
    <WeatherDetails title="chuva" value="3mm" />
    <WeatherDetails title="vento" value="25km/h" />
    <WeatherDetails title="umidade" value="60%" />
  </S.ListWrapper>
);
