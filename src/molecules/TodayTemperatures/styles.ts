import styled, { css } from "styled-components";

export type TabItem = {
  active?: boolean;
};

export const WrapperList = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;
