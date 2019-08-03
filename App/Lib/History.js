// import { Store } from "../Utils";
import { AsyncStorage } from "react-native";

const key = "@user:history";

class History {
  /**
   * Gets user"s saved history
   */
  static get() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, value) => {
        if (error) reject(error);
        resolve(value !== null ? JSON.parse(value) : []);
      });
    });
  }

  /**
   * Save current searched track / album / artist in the history
   * @param {String} text
   */
  static put(text) {
    this.get().then(items => {
      if (items.length >= 5) {
        items.pop();
      }
      items.unshift({ text });
      AsyncStorage.setItem(key, JSON.stringify(items), error => {
        if (error) {
          console.warn("Could not save item to AS. ", error);
        }
      });
    });
  }
}

export default History;