import * as S from "./styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => (
  <S.Container>{children}</S.Container>
);
