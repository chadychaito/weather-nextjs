import { VerticalCard } from "../../atoms/VerticalCard";

import * as S from "./styles";

export const TodayTemperatures = () => (
  <S.WrapperList>
    <VerticalCard hour="00:00" degree={18} />
    <VerticalCard hour="03:00" degree={21} active />
    <VerticalCard hour="06:00" degree={22} />
    <VerticalCard hour="09:00" degree={24} />
    <VerticalCard hour="12:00" degree={31} />
    <VerticalCard hour="15:00" degree={23} />
    <VerticalCard hour="18:00" degree={19} />
    <VerticalCard hour="21:00" degree={15} />
  </S.WrapperList>
);
