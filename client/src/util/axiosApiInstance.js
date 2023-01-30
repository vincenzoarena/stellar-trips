import axios from "axios";

const axiosApiInstance = axios.create();

//axiosApiInstance.defaults.baseURL = 'http://localhost:3001';
axiosApiInstance.defaults.withCredentials = true;

//intercepts responses.
axiosApiInstance.interceptors.response.use(
  (config) => {
    console.log("A response has been received");
    return config;
  },
  (error) => {
    console.log("Error response has been received", error.response);

    if (error.response.status === 401) {
      console.log("We hit 401, token must not be valid");
      window.location = "/logout";
    }

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
