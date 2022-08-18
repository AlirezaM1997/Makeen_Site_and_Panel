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

const getBootcampSlider = async () => {
  const { data } = await client.get("/firstpage/show-bootcamp");
  return data;
};
const getFeatures = async () => {
  const { data } = await client.get("/bootcamp/read-features");
  return data;
};
const getCourses = async () => {
  const { data } = await client.get("/courses/show_category");
  return data;
};

const getInstallmentPayment = async () => {
  const { data } = await client.get("/firstpage/show-payment");
  return data;
};

export {
  getLogin,
  getCounter,
  getSliderImages,
  deleteSliderImage,
  getBootcampSlider,
  getFeatures,getCourses,
  getInstallmentPayment,
};
