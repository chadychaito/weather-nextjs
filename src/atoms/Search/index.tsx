import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import { ChangeEvent } from "react";
import { DebouncedFunc } from "lodash";

interface IProps {
  type?: string;
  placeholder?: string;
  onChange: DebouncedFunc<
    (event: ChangeEvent<HTMLInputElement>) => Promise<any>
  >;
}

export const Search: React.FC<IProps> = ({
  type = "text",
  placeholder = "",
  onChange,
}) => {
  return (
    <>
      <S.InputWrapper>
        <S.Input type={type} placeholder={placeholder} onChange={onChange} />
        <FiSearch />
      </S.InputWrapper>
    </>
  );
};
