import axiosClient from './axiosClient'
const electricityWaterApi = {
  getAll() {
    const url = "/api/v1/electricity-water/";
    return axiosClient.get(url);
  },
  createelectricitywater(electricitywater) {
    const url = "/api/v1/electricity-water/";
    return axiosClient.post(url, electricitywater);
  },
  deleteelectricitywater(electricitywater) {
    const url = `/api/v1/electricity-water/${electricitywater}/delete/`;
    return axiosClient.delete(url);
  },
  updateelectricitywater(electricitywater) {
    const url = `/api/v1/electricity-water/${electricitywater.id}/`;
    return axiosClient.put(url, electricitywater.data);
  },
};
export default electricityWaterApi;