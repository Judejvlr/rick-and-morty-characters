import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EN } from '../languages/en';
import { ES } from '../languages/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          ...ES
        }
      },
      en: {
        translation: {
          ...EN
        }
      }
    },
    lng: localStorage.getItem('lang') ?? '',
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;