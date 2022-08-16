import axios from "axios";

const client = axios.create({ baseURL: `${process.env.domain}` });

const getCounter = async () => {
  const { data } = await client.get("/firstpage/all_counter");
  return data;
};

const getImageSlider = async () => {
  const { data } = await client.get("/firstpage/all_sliders");
  return data;
};

export { getCounter, getImageSlider };
