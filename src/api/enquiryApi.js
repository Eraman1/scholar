import axios from "./axiosInstance";

export const createEnquiry = (formData) => {
  return axios.post("/enquiry/create", formData);
};

export const getAllEnquiry = () => {
  return axios.get("/enquiry/get-all"); // assuming this is the route
};
