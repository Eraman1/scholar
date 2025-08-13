// studentService.js
import axiosInstance from "./axiosInstance";

export const downloadStudentData = () => {
  return axiosInstance.get("/vedubuildApply/download-data", {
    responseType: "blob",
  });
};

export const applyBulk = (formData) => {
  return axiosInstance.post("/vedubuildApply/bulk-apply", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const sendPhoneOtp = (data) => {
  return axiosInstance.post(
    "/otp/request-phone-otp",
    data, 
    { responseType: "blob" } 
  );
};

export const verifyPhoneOtp = (data) => {
  return axiosInstance.post(
    "/otp/verify-phone-otp",
    data, 
    { responseType: "blob" } 
  );
};

export const sendEmailOtp = (data) => {
  return axiosInstance.post(
    "/otp/request-email-otp",
    data, 
    { responseType: "blob" } 
  );
};
export const verifyEmailOtp = (data) => {
  return axiosInstance.post(
    "/otp/verify-email-otp",
    data, 
    { responseType: "blob" } 
  );
};

export const addStudentData = (data)=>{
  return axiosInstance.post(
    "/vedubuildApply/apply",
    data, 
    { responseType: "blob" } 
  );
}
