import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import bn from './language/bn.json';
import en from './language/en.json';
// var lan;
// if (typeof window !== 'undefined') {
//       // Perform localStorage action
//       lan = localStorage.getItem('lan');
// }
// console.log(lan)
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