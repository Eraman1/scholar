import axiosInstance from "./axiosInstance";

export const loginUser = (credentials) => {
  return axiosInstance.post("/user/login", credentials);
};

export const logoutUser = () => {
  return axiosInstance.get("/user/logout");
};
