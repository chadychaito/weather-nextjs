import { Tab } from "../../atoms/Tab";
import { TodayTemperatures } from "../../molecules/TodayTemperatures";
import * as S from "./styles";

export const TodayWeather = () => (
  <S.Wrapper>
    <Tab />
    <TodayTemperatures />
  </S.Wrapper>
);
