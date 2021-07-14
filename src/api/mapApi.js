import axios from "axios";
import axiosClient from "./axiosClient";
const mapApi = {
  get(addressr) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/"${addressr}".json?access_token=pk.eyJ1Ijoibmd1eWVuZHV5MDMxMSIsImEiOiJja3Fhejl1ZWswNWhrMnBqa25hemZweGdzIn0.d2l2wNQQyRROJlD4AHcbAQ`;
    return axiosClient.get(url);
  }
};
export default mapApi;






