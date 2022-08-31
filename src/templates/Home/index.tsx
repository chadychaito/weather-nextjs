import axios from "axios";
import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "../../atoms/Container";
import { Search } from "../../atoms/Search";
import { CityInfo } from "../../molecules/CityInfo";
import { WeatherInfo } from "../../molecules/WeatherInfo";
import { TodayWeather } from "../../organisms/TodayWeather";
import { WeatherDetailsList } from "../../organisms/WeatherDetailsList";
import moment from "moment";
import "moment-timezone";

export const HomeTemplate = () => {
  const [, setSearch] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const regionNames = useMemo(
    () => new Intl.DisplayNames(["pt-br"], { type: "region" }),
    []
  );

  const transformData = useCallback(
    (weatherList: any): any => {
      const groupByDay = weatherList.list.reduce((group: any, weather: any) => {
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

      return {
        ...weatherList,
        city: {
          ...weatherList.city,
          country: regionNames.of(weatherList.city.country),
        },
        list: groupByDay,
      };
    },
    [regionNames]
  );

  //TODO: change type
  const handleSearch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      setSearch(text);

      if (text.length) {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${event.target.value}&appid=d6d4d803edb973c474d009a6092f9c6b&lang=pt_br&units=metric`
        );
        const transformedData = transformData(data);
        setCurrentCity(transformedData);
        setIsLoading(false);
      }
    },
    [transformData]
  );

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, [handleSearch]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const getCurrentDate = () => {
    const _date = new Date();
    return _date.toLocaleDateString("pt-BR");
  };

  return (
    <Container>
      <Search
        placeholder="Digite o nome da sua cidade"
        onChange={debouncedResults}
        isLoading={isLoading}
      />
      {currentCity && (
        <>
          <CityInfo city={currentCity.city} />
          <WeatherInfo todayWeather={currentCity.list[getCurrentDate()][0]} />
          <WeatherDetailsList
            todayWeather={currentCity.list[getCurrentDate()][0]}
          />
          <TodayWeather todayWeather={currentCity.list[getCurrentDate()]} />
        </>
      )}
      <p>Ops...Você ainda não fez nenhuma pesquisa.</p>
    </Container>
  );
};
