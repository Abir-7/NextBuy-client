import config from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.backendApi,
});

export default axiosInstance;
