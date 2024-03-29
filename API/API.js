import axios from "axios";
const client = axios.create({ baseURL: `${process.env.domain}` });
const getCounter = async () => {
  const { data } = await client.get("/firstpage/all_counter");
  return data;
};
const getSliderImages = async () => {
  const { data } = await client.get("/firstpage/all_sliders");
  return data;
};
const deleteSliderImage = async (id) => {
  const { data } = await client.delete(`/firstpage/delete_slider/${id}`);
  return data;
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
  const { data } = await client.get("/courses/all_courses");
  return data;
};
const getPayment = async () => {
  const { data } = await client.get("/firstpage/show-payment");
  return data;
};
const getMentors = async () => {
  const { data } = await client.get("/courses/all_mentors");
  return data;
};
const getWhyMakeen = async () => {
  const { data } = await client.get("/firstpage/show-why-makeen");
  return data;
};
const getMakeeniha = async () => {
  const { data } = await client.get("/bootcamp/get-makeeniha");
  return data;
};
const getMethodology = async () => {
  const { data } = await client.get("/firstpage/show-methodology");
  return data;
};
const getQuestions = async () => {
  const { data } = await client.get("/bootcamp/all_questions/");
  return data;
};
const getBlogs = async () => {
  const { data } = await client.get("/blog/show_blogs");
  return data;
};
export {
  getCounter,
  getSliderImages,
  deleteSliderImage,
  getBootcampSlider,
  getFeatures,
  getCourses,
  getPayment,
  getMentors,
  getWhyMakeen,
  getMakeeniha,
  getMethodology,
  getQuestions,
  getBlogs,
};
