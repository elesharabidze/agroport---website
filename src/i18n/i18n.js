import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import translationGEO from './locales/geo/translationGEO.json'
import translationENG from './locales/eng/translationENG.json'

const resources = {
    geo: {
        translation: translationGEO
    },
    eng: {
        translation: translationENG
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    resources,
    fallbackLng: "eng",
    interpolation: {
        escapeValue: false 
    },
    detection:{
        order: ['localStorage', 'htmlTag']
    }
})
    
export default i18n