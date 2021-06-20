import axios from "axios";
import axiosClient from "./axiosClient";
const monthlyincomeApi = {
  getAll() {
    const url = "/api/v1/rules/";
    return axiosClient.get(url);
  },
  createrules(rules) {
    const url = "/api/v1/rules/";
    return axiosClient.post(url,rules);
  },
  updateRole(rules) {
    const url = `/api/v1/rules/${rules.id}`;
    return axiosClient.put(url, rules.data);
  },
  deleteRole(rules) {
    const url = `/api/v1/rules/${rules}/delete/`;
    return axiosClient.delete(url);
  },
};
export default monthlyincomeApi;
