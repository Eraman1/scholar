import axios from "./axiosInstance";

export const createEnquiry = (formData) => {
  return axios.post("/enquiry/create", formData);
};

export const getAllEnquiry = () => {
  return axios.get("/enquiry/get-all"); 
};


export const totalEnquiries = () => {
  return axios.get("/enquiry/total-enquiries"); 
};

export const deleteEnquiry = (id) => {
  return axios.delete(`/enquiry/${id}`);
};