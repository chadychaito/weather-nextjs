import { FaUmbrella, FaWind } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";

import * as S from "./styles";

export type IconType = "umbrela" | "wind" | "waterdrop";
interface IProps {
  icon: IconType;
}

const getIconFromName = (icon: IconType): JSX.Element => {
  const nameToJsx = {
    umbrela: <FaUmbrella />,
    wind: <FaWind />,
    waterdrop: <MdWaterDrop />,
  };

  return nameToJsx[icon];
};

export const PaperIcon = ({ icon }: IProps) => (
  <S.Wrapper icon={icon}>{getIconFromName(icon)}</S.Wrapper>
);
