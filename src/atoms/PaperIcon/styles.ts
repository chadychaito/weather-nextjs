import styled from "styled-components";
import { IconType } from "../PaperIcon";

type WrapperType = {
  icon: IconType;
};

const getColorFromIcon = (icon: IconType): string => {
  const colorFromIcon = {
    umbrela: "#1E9B26",
    wind: "#C01B3C",
    waterdrop: "#379ADC",
  };

  return colorFromIcon[icon];
};

export const Wrapper = styled.div<WrapperType>`
  border-radius: 0.75rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 9px 10px -3px rgba(23, 126, 37, 0.15),
    0px 0px 10px rgba(0, 0, 0, 0.07);
  font-size: 1.5rem;
  color: ${({ icon }) => getColorFromIcon(icon)};
`;
