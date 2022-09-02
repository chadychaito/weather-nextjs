import * as S from "./styles";

interface IProps {
  size?: string;
}

export const Loader: React.FC<IProps> = ({ size }) => <S.Loader size={size} />;
