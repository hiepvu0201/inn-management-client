import axios from "axios";
import axiosClient from "./axiosClient";
const roomsApi = {
  getAll() {
    const url = "/api/v1/rooms/";
    return axiosClient.get(url);
  },
  createrooms(room) {
    const url = "/api/v1/rooms/";
    return axiosClient.post(url, room);
  },
  deleterooms(room) {
    const url = `/api/v1/rooms/${room}/delete/`;
    return axiosClient.delete(url);
  },
  updaterooms(room) {
    const url = `/api/v1/rooms/${room.id}/`;
    return axiosClient.put(url, room.data);
  },
  searchRoombyBranch(params){
    const url = `/api/v1/rooms/search-by-branch-location/?branchLocation=${params}`;
    return axiosClient.get(url);
  }
};
export default roomsApi;
