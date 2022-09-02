import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import { ChangeEvent } from "react";
import { DebouncedFunc } from "lodash";
import { Loader } from "../Loader";

interface IProps {
  type?: string;
  placeholder?: string;
  isLoading?: boolean;
  onChange: DebouncedFunc<
    (event: ChangeEvent<HTMLInputElement>) => Promise<any>
  >;
}

export const Search: React.FC<IProps> = ({
  type = "text",
  placeholder = "",
  isLoading = true,
  onChange,
}) => {
  return (
    <>
      <S.InputWrapper>
        <S.Input type={type} placeholder={placeholder} onChange={onChange} />
        {isLoading ? <Loader /> : <FiSearch />}
      </S.InputWrapper>
    </>
  );
};
