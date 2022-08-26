import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.36);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.625rem;
  padding: 0.5rem 1.5rem;
  height: 3rem;
`;

export const TitleGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Text = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 400;
  color: #303345;
  margin: 0;
`;

export const CustomText = styled(Text)`
  text-transform: unset;
`;
