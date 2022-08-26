import * as S from "./styles";

interface IProps {
  temperature: number;
  descriptionWeather: string;
}

export const WeatherCondition: React.FC<IProps> = ({
  temperature,
  descriptionWeather,
}) => (
  <S.DegreeWrapper>
    <S.DegreeGroup>
      <S.Deegree>{temperature}</S.Deegree>
      <S.Metric>ºC</S.Metric>
    </S.DegreeGroup>
    <S.WeatherName>{descriptionWeather}</S.WeatherName>
  </S.DegreeWrapper>
);
