import axios from "axios";
import axiosClient from "./axiosClient";

const facilitiesApi = {
  getAll() {
    const url = "/api/v1/facilities/";
    return axiosClient.get(url);
  },
  createfacilities(facility) {
    const url = "/api/v1/facilities/";
    return axiosClient.post(url, facility);
  },
  deletefacilities(facility) {
    const url = `/api/v1/facilities/${facility}/delete/`;
    return axiosClient.delete(url);
  },
  updatefacilities(facility) {
    const url = `/api/v1/facilities/${facility.id}/`;
    return axiosClient.put(url, facility.data);
  },
};
export default facilitiesApi;
