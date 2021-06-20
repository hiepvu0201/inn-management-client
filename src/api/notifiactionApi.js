import axios from "axios";
import axiosClient from "./axiosClient";
const notificationApi = {
  getAll() {
    const url = "/api/v1/notifications/";
    return axiosClient.get(url);
  },
  createnotifications(notifications) {
    const url = "/api/v1/notifications/";
    return axiosClient.post(url, notifications);
  },
  updatenotifications(notifications) {
    const url = `/api/v1/notifications/${notifications.id}`;
    return axiosClient.put(url, notifications.data);
  },
  deletenotification(notifications) {
    const url = `/api/v1/notifications/${notifications}/delete/`;
    return axiosClient.delete(url);
  },
};
export default notificationApi;
