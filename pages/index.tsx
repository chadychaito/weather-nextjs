/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";
import Head from "next/head";
import { HomeTemplate } from "../src/templates/Home";

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
      <HomeTemplate />
    </div>
  );
};

export default Home;
