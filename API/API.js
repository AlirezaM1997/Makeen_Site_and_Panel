import axios from "axios";

const client = axios.create({ baseURL: `${process.env.domain}` });

const getLogin = async (username, password) => {
//.........
};

const getCounter = async () => {
  const { data } = await client.get("/firstpage/all_counter");
  return data;
};

const getSliderImages = async () => {
  const { data } = await client.get("/firstpage/all_sliders");
  return data;
};

const deleteSliderImage = (id) => {
  client.post(`/firstpage/delete_slider/${id}`);
};

export { getLogin, getCounter, getSliderImages, deleteSliderImage };
