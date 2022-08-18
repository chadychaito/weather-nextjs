import Image from "next/image";

interface IProps {
  type:
    | "clear"
    | "clouds"
    | "light_rain"
    | "mist"
    | "rain"
    | "snow"
    | "thunderstorm";
}
export const WeatherIcon = ({ type }: IProps) => (
  <Image
    src={`/icons/${type}.svg`}
    width={180}
    height={180}
    alt="weather icon"
  />
);
