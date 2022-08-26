import * as S from "./styles";

interface IProps {
  city: {
    name: string;
    country: string;
  };
}

export const CityInfo: React.FC<IProps> = ({ city }) => {
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const _date = new Date();
  const currentDate = _date.toLocaleDateString("pt-BR", options);

  return (
    <S.Wrapper>
      <S.Title>
        {city.name}, <br />
        {city.country}
      </S.Title>
      <S.Subtitle>{currentDate}</S.Subtitle>
    </S.Wrapper>
  );
};
