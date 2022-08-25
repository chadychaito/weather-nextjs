import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.36);
  height: 40px;
  padding: 0 1rem;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  :focus-within {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 12px;
  background: transparent;
`;
