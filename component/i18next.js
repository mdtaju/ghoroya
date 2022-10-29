import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import bn from './language/bn.json';
import en from './language/en.json';

i18next.use(initReactI18next).init({
      resources: {
            en: {
                  translation: en,
            },
            bn: {
                  translation: bn,
            },
      },
      fallbackLng: 'en',
});

export default i18next;