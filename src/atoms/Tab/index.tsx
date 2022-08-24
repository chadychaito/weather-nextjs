import { HiChevronRight } from "react-icons/hi";

import Link from "next/link";

import * as S from "./styles";

export const Tab: React.FC = () => (
  <S.Tab>
    <S.TabItem active>Hoje</S.TabItem>
    <Link href="#">
      <S.CustomTabItem>
        <>
          Próximos 7 dias
          <HiChevronRight />
        </>
      </S.CustomTabItem>
    </Link>
  </S.Tab>
);
