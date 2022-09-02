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
import { Loader } from "../../atoms/Loader";

import * as S from "./styles";

export const HomeTemplate = () => {
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

  const fetchData = useCallback(
    async (city: string) => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d6d4d803edb973c474d009a6092f9c6b&lang=pt_br&units=metric`
      );
      const transformedData = transformData(data);
      setCurrentCity(transformedData);
      setIsLoading(false);
    },
    [transformData]
  );

  const handleSearch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const city = event.target.value;

      if (city.length) {
        fetchData(city);
      }
    },
    [fetchData]
  );

  const getCurrentDate = () => {
    const _date = new Date();
    return _date.toLocaleDateString("pt-BR");
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, [handleSearch]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    fetchData("São paulo");
  }, []);

  return (
    <Container>
      <Search
        placeholder="Digite o nome da sua cidade"
        onChange={debouncedResults}
        isLoading={isLoading}
      />
      {currentCity ? (
        <>
          <CityInfo city={currentCity.city} />
          <WeatherInfo todayWeather={currentCity.list[getCurrentDate()][0]} />
          <WeatherDetailsList
            todayWeather={currentCity.list[getCurrentDate()][0]}
          />
          <TodayWeather todayWeather={currentCity.list[getCurrentDate()]} />
        </>
      ) : (
        <S.LoaderWrapper>
          <Loader size="56" />
        </S.LoaderWrapper>
      )}
    </Container>
  );
};
