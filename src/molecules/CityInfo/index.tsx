import * as S from "./styles";

interface IProps {
  city: {
    name: string;
    country: string;
  };
}

export const CityInfo: React.FC<IProps> = ({ city }) => (
  <S.Wrapper>
    <S.Title>
      {city.name}, <br />
      {city.country}
    </S.Title>
    <S.Subtitle>Tue, Jun 30</S.Subtitle>
  </S.Wrapper>
);
