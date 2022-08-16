import * as api from "../API/homeAPI";
import { useQuery } from "@tanstack/react-query";

const useGetCounter = () => {
  return useQuery("home",()=> api.getCounter());
};

const useGetImageSlider = () => {
  return useQuery("imageSlider", api.getImageSlider);
};

export { useGetCounter, useGetImageSlider };
