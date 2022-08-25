import * as S from "./styles";

interface IProps {
  name?: string;
}

export const CityName: React.FC<IProps> = ({ name = "" }) => (
  <S.Wrapper>
    <S.Title>
      {name}, <br />
      Sweden
    </S.Title>
    <S.Subtitle>Tue, Jun 30</S.Subtitle>
  </S.Wrapper>
);
