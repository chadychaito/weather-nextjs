import { Tab } from "../../atoms/Tab";
import { TodayTemperatures } from "../../molecules/TodayTemperatures";
import * as S from "./styles";

interface IProps {
  todayWeather: [
    {
      main: {
        temp: number;
      };
      dt_txt: string;
      weather: [
        {
          id: number;
        }
      ];
    }
  ];
}

export const TodayWeather: React.FC<IProps> = ({ todayWeather }) => (
  <S.Wrapper>
    <Tab />
    <TodayTemperatures todayWeather={todayWeather} />
  </S.Wrapper>
);
