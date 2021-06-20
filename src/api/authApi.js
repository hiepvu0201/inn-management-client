import axios from "axios";
import axiosClient from "./axiosClient";
const authApi = {
  signin(params){
    const url = `/api/v1/auth/signin`;
    return axiosClient.post(url,params);
  },
  signup(params){
    const url =`/api/v1/auth/signup`;
    return axiosClient.post(url,params)
  }
};
export default authApi;
