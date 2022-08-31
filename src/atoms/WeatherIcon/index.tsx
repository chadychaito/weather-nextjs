import Image from "next/image";

export type IconType =
  | "clear"
  | "clouds"
  | "light_rain"
  | "mist"
  | "rain"
  | "snow"
  | "thunderstorm";
interface IProps {
  type: IconType;
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
