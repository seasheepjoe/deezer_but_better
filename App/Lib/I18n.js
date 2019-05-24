import * as RNLocalize from "react-native-localize";
import * as Locales from "../Locales";

class I18n {
  static translate(key) {
    const currentLocale = this.getCurrentLocale();
    if (!Locales[currentLocale].hasOwnProperty(key)) {
      return `[Missing translation: "${key}"]`;
    }
    return Locales[currentLocale][key];
  }

  static getCurrentLocale() {
    const userLocales = RNLocalize.getLocales();
    for (var locale of userLocales) {
      if (Locales.hasOwnProperty(locale.languageCode)) {
        return locale.languageCode;
      }
    }
    return this.getDefaultLocale();
  }

  static getDefaultLocale() {
    return Locales.defaultLocale;
  }
}

I18n.t = I18n.translate;

export default I18n;