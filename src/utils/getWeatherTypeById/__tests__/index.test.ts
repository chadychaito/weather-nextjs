import { getWeatherTypeById } from "../index";
import { describe, expect, test } from "@jest/globals";

import { data } from "./fixture/index";

describe("GetWeatherTypeByid should response", () => {
  Object.keys(data).forEach((key) => {
    const min = data[key].min;
    const max = data[key].max;

    test(`${key} when weatherId is >= ${min} && <= ${max}`, () => {
      for (let weatherId = min; weatherId <= max; weatherId++) {
        const result = getWeatherTypeById(weatherId);

        expect(result).toBe(key);
      }
    });
  });
});
