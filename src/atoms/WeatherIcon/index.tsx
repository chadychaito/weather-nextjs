import Image from "next/image";

interface IProps {
  type: "a" | "b" | "c" | "d" | "e";
}
//TODO: Refactor types when decide

export const WeatherIcon = ({ type }: IProps) => (
  <Image src="/cludy.png" alt="weather icon" width={150} height={150} />
);
