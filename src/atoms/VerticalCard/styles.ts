import styled from "styled-components";

type ActiveType = {
  active?: boolean;
};

export const Wrapper = styled.div<ActiveType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)"};
  border-radius: 2rem;
  padding: 1rem 0.5rem;
`;

export const Hour = styled.p<ActiveType>`
  margin: 0;
  font-size: 0.85rem;
  color: ${({ active }) => (active ? "#303345" : "#9C9EAA")};
  font-weight: 400;
`;

export const Degree = styled(Hour)`
  color: #303345;
  font-weight: 700;
`;
