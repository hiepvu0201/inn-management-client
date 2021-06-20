import axios from "axios";
import axiosClient from "./axiosClient";
const invoicesApi = {
  getAll() {
    const url = "/api/v1/invoices/";
    return axiosClient.get(url);
  },
  download(params) {
    const url = `/api/v1/invoices/${params.id}/download/`;
    return axiosClient.get(url, {
      headers: {
        "Content-Type": "text/csv",
      },
      responseType: "blob",
    });
  },
  download_many() {
    const url = `/api/v1/invoices/download/`;
    return axiosClient.get(url, {
      headers: {
        "Content-Type": "text/csv",
      },
      responseType: "blob",
    });
  },
  create(params){
    const url=`/api/v1/invoices/`;
    return axiosClient.post(url,params);
  },
  delete(params){
    const url=`/api/v1/invoices/${params}/delete/`;
    return axiosClient.delete(url)
  },
  getid(params){
    const url = `/api/v1/invoices/${params}/`;
    return axiosClient.get(url);
  }
};
export default invoicesApi;
