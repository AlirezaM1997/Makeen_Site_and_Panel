import * as api from "../API/homeAPI";
import { useQuery } from "react-query";

const useGetCounter = () => {
  return useQuery("counter", api.getCounter);
};


export {
    useGetCounter,
}