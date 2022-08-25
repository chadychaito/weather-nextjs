import * as S from "./styles";

interface IProps {
  temperature: number;
  mainWeather: string;
}

export const WeatherCondition: React.FC<IProps> = ({
  temperature,
  mainWeather,
}) => (
  <S.DegreeWrapper>
    <S.DegreeGroup>
      <S.Deegree>{temperature}</S.Deegree>
      <S.WeatherName>{mainWeather}</S.WeatherName>
    </S.DegreeGroup>
    <S.Metric>ºC</S.Metric>
  </S.DegreeWrapper>
);
