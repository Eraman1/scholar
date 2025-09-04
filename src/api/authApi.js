import axiosInstance from "./axiosInstance";

export const loginUser = (credentials) => {
  return axiosInstance.post("/user/login", credentials);
};

export const logoutUser = () => {
  return axiosInstance.get("/user/logout");
};


export const syllabusUpload = (formData) =>{
  return axiosInstance.post("/syllabus/upload",formData ,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

export const getAllSyllabus = ()=>{
  return axiosInstance.get("/syllabus/getAllSyllabus")
}
