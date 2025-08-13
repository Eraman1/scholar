import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.LOCAL_VITE_API_BASE_URL || "http://localhost:8000/api" ,                           //"https://api.vedubuild.org/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
