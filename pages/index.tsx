/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../src/atoms/Container";
import { Title } from "../src/molecules/Title";
import { WeatherInfo } from "../src/molecules/WeatherInfo";
import { WeatherDetailsList } from "../src/organisms/WeatherDetailsList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather APP</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Title />
        <WeatherInfo />
        <WeatherDetailsList />
      </Container>
    </div>
  );
};

export default Home;
