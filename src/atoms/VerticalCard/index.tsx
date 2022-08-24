import { WeatherIcon } from "../WeatherIcon";

import * as S from "./styles";

interface IProps {
  hour: string;
  degree: number;
  active?: boolean;
}

export const VerticalCard: React.FC<IProps> = ({
  hour,
  degree,
  active = false,
}) => (
  <S.Wrapper active={active}>
    <S.Hour active={active}>{hour}</S.Hour>
    <WeatherIcon type="clear" width={50} height={50} />
    <S.Degree>{degree}º</S.Degree>
  </S.Wrapper>
);
