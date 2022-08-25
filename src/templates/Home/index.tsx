import axios from "axios";
import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Container } from "../../atoms/Container";
import { Search } from "../../atoms/Search";
import { CityName } from "../../molecules/CityName";
import { WeatherInfo } from "../../molecules/WeatherInfo";
import { TodayWeather } from "../../organisms/TodayWeather";
import { WeatherDetailsList } from "../../organisms/WeatherDetailsList";
import moment from "moment";
import "moment-timezone";

export const HomeTemplate = () => {
  const [, setSearch] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<any>(null);
  const [weatherByDay, setWeatherByDay] = useState<any>(null);

  const transformData = (weatherList: any): any => {
    const groupByDay = weatherList.reduce((group: any, weather: any) => {
      weather.dt_txt = moment
        .utc(weather.dt_txt)
        .tz("America/Sao_Paulo")
        .format();

      const { dt_txt } = weather;
      const _dateTxt = new Date(dt_txt);
      const dateOnly = _dateTxt.toLocaleDateString("pt-BR");

      group[dateOnly] = group[dateOnly] ?? [];
      group[dateOnly].push(weather);
      return group;
    }, {});
    return groupByDay;
  };

  //TODO: change type
  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearch(text);
    if (text.length) {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${event.target.value}&appid=d6d4d803edb973c474d009a6092f9c6b&lang=pt_br&units=metric`
      );
      const transformedData = transformData(data.list);
      setCurrentCity(data);
    }
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <Container>
      <Search
        placeholder="Digite o nome da sua cidade"
        onChange={debouncedResults}
      />

      {currentCity && (
        <>
          <CityName name={currentCity.city.name} />
          <WeatherInfo
            temperature={currentCity.list[0].main.temp.toFixed(0)}
            mainWeather={currentCity.list[0].weather.main}
          />
          <WeatherDetailsList />
          <TodayWeather />
        </>
      )}

      <p>Ops...Você ainda não fez nenhuma pesquisa.</p>
    </Container>
  );
};
