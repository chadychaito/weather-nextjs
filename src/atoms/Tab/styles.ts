import styled, { css } from "styled-components";

import { ActiveType } from "../../commonTypes";

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d6996b;
`;

export const TabItem = styled.div<ActiveType>`
  position: relative;
  font-size: 0.875rem;
  color: #d6996b;
  font-weight: 400;
  line-height: 2.75rem;
  ${({ active }) =>
    active &&
    css`
  color: #313341;
  font-weight: 700;
  ::after {
    content: "";
    position: absolute;
    bottom: -0.125rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: calc(100% - 1rem);
    height: 0.25rem;
    border-radius: 4px;
    background:  #313341;
  `}
`;

export const CustomTabItem = styled(TabItem)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  :hover {
    cursor: pointer;
  }
`;
