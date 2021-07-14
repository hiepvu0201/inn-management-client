import axiosClient from './axiosClient'
const floorApi = {
  getAll() {
    const url = "/api/v1/floors/";
    return axiosClient.get(url);
  },
  createFloor(floors) {
    const url = "/api/v1/floors/";
    return axiosClient.post(url, floors);
  },
  updateFloor(floors) {
    const url = `/api/v1/floors/${floors.id}`;
    return axiosClient.put(url, floors.data);
  },
  deleteFloor(floors) {
    const url = `/api/v1/floors/${floors}/delete/`;
    return axiosClient.delete(url);
  },
  getLocation(params){
     const url = `/api/v1/floors/search-by-branch-location/?branchLocation=${params}`;
     return axiosClient.get(url);
  }
};
export default floorApi;