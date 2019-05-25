import axios from "axios";
import Config from "../Config/ApiConfig.json";

const api = axios.create({
  baseURL: Config.api,
});

export default {

  /**
   * Returns 
   * @param {String | Number} id 
   */
  getTrack(id) {
    return api({
      url: `/album/${id}`,
      method: "GET",
    });
  },

  /**
   * 
   * @param {String} query 
   */
  search(query) {
    return api({
      url: `/search?q=${query}`,
      method: "GET",
    });
  }
}