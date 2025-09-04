import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locals/en.json";
import hi from "./locals/hi.json";
import tel from "./locals/tel.json";
import tam from "./locals/tam.json";
import ml from "./locals/ml.json";
import kan from "./locals/kan.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    tel: { translation: tel },
    tam: { translation: tam },
    ml: { translation: ml },
    kan: { translation: kan },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
