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
  width?: number;
  height?: number;
}
export const WeatherIcon = ({ type, width = 180, height = 180 }: IProps) => (
  <Image
    src={`/icons/${type}.svg`}
    width={width}
    height={height}
    alt="weather icon"
  />
);
