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
    let tracks = api({
      url: `/search/track?q=${query}&limit=2`,
      method: "GET",
    });
    let artists = api({
      url: `/search/artist?q=${query}&limit=2`,
      method: "GET",
    });
    let playlist = api({
      url: `/search/playlist?q=${query}&limit=2`,
      method: "GET",
    });
    let albums = api({
      url: `/search/album?q=${query}&limit=2`,
      method: "GET",
    });
    let podcasts = api({
      url: `/search/podcast?q=${query}&limit=2`,
      method: "GET",
    });
    let profiles = api({
      url: `/search/user?q=${query}&limit=2`,
      method: "GET",
    });
    return Promise.all([tracks, artists, playlist, albums, podcasts, profiles]).then(values => {
      let results = values.map(item => [...item.data.data.map(item => item)]);
      let newArray = [];
      results.map(item => {
        item.map(el => {
          newArray.push(el);
        });
      });
      results = newArray;
      let responseObject = {
        tracks: results.filter(item => item.type === "track"),
        artists: results.filter(item => item.type === "artist"),
        playlists: results.filter(item => item.type === "playlist"),
        albums: results.filter(item => item.type === "album"),
        podcasts: results.filter(item => item.type === "podcast"),
        profiles: results.filter(item => item.type === "user"),
      };
      return responseObject;
    });
  }
}