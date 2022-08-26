import { PaperIcon, IconType } from "../../atoms/PaperIcon";

import * as S from "./styles";

type TitleType = "chuva" | "umidade" | "vento";

interface IProps {
  title: TitleType;
  value: string;
}

const getIconByTitle = (title: TitleType): IconType => {
  const titleToIcon = {
    chuva: "umbrela",
    umidade: "waterdrop",
    vento: "wind",
  };

  return titleToIcon[title] as IconType;
};

export const WeatherDetails = ({ title, value }: IProps) => (
  <S.Wrapper>
    <S.TitleGroup>
      <PaperIcon icon={getIconByTitle(title)} />
      <S.Text>{title}</S.Text>
    </S.TitleGroup>
    <S.CustomText>{value}</S.CustomText>
  </S.Wrapper>
);
