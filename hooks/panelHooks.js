import * as api from "../API/API";
import { useQuery, useMutation } from "@tanstack/react-query";

const useGetCounter = () => {
  return useQuery(["counter"], () => api.getCounter());
};

const useGetSliderImages = () => {
  return useQuery(["getSliderImages"], api.getSliderImages);
};

export { useGetCounter, useGetSliderImages };
