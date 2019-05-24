// import { Store } from "../Utils";
import { AsyncStorage } from "react-native";

const key = "@user:history";

class History {
  /**
   * Gets user"s saved history
   */
  static getHistory() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, value) => {
        if (error) reject(error);
        resolve(value !== null ? value : []);
      });
    });
  }

  /**
   * Save current searched track / album / artist in the history
   * @param {String} text
   */
  static saveSearch(text) {
    return new Promise((resolve, reject) => {
      AsyncStorage.mergeItem(key, JSON.stringify(text), error => {
        if (error) {
          console.warn("Could not save item in history.");
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default History;