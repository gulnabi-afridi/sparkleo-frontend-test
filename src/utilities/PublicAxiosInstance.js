import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

const AuthAxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AuthAxiosInstance;
