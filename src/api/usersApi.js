import axios from "axios";
import axiosClient from "./axiosClient";
const usersApi = {
  getAll() {
    const url = "/api/v1/users/";
    return axiosClient.get(url);
  },
  // createuserwithimg(){
  //   const url= "/api/v1/users/";
  //   return axiosClient(url,users)
  // }
  createusers(users) {
    const url = "/api/v1/users/";
    return axiosClient.post(url, users);
  },
  updateusers(users) {
    const url = `/api/v1/users/${users.id}`;
    return axiosClient.put(url, users.data);
  },
  deleteusers(users) {
    const url = `/api/v1/users/${users}/delete/`;
    return axiosClient.delete(url);
  },
  checkin(params){
    const url = `/api/v1/users/checkin/?roomNo=${params.roomNo}&userName=${params.userName}&checkInDate=${params.checkInDate}`;
    return axiosClient.get(url);
  },
   checkout(params){
    const url = `/api/v1/users/checkout/?userName=${params.userName}&checkOutDate=${params.checkOutDate}`;
    return axiosClient.get(url);
  },
  getimage(file){
    const url=`/downloadFile/${file}`;
    return axiosClient.get(url);
  },
  getuserid(param){
    const url=`/api/v1/users/${param}`;
    return axiosClient.get(url);
  },
  changepassword(params){
    const url = `/api/v1/users/change-password`;
    return axiosClient.post(url,params);
  },
  checkusername(params){
    const url=`/api/v1/users/check/?userName=${params}`;
    return axiosClient.get(url);
  },
  getalluserbyusername(params){
    const url = `/api/v1/users/userName/?userName=${params}`;
    return axiosClient.get(url);
  },
  
  
};
export default usersApi;
