import styled, { css, keyframes } from "styled-components";
import { BiLoader } from "react-icons/bi";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

type Loader = {
  size?: string;
};

export const Loader = styled(BiLoader)<Loader>`
  animation: ${rotate} 2s linear infinite;
  font-size: ${({ size }) => (size ? `${size}px` : "unset")};
`;
