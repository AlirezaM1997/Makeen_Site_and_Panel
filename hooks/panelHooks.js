import * as api from "../API/globalAPI";
import { useQuery } from "@tanstack/react-query";

const useGetCounter = () => {
  return useQuery(["counter"],()=> api.getCounter());
};

const useGetSliderImages = () => {
  return useQuery(["sliderImages"], api.getSliderImages);
};

export { useGetCounter, useGetSliderImages };
