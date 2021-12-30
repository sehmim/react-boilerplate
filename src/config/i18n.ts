import i18n from "i18next";
import Backend from "i18next-locize-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { resources } from "../locale/resources";

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator', 'cookie'],
    caches: ['localStorage']
}

const locizeOptions = {
    projectId: process.env.REACT_APP_LOCIZE_PROJ_ID as string,
    apiKey: process.env.REACT_APP_LOCIZE_API_KEY as string,
    referenceLng: process.env.REACT_APP_LOCIZE_REF_LANG as string,
    version: process.env.REACT_APP_LOCIZE_VERSION as string
}

export const initTranslation = () => {
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
        .init({
            debug: true,
            backend: locizeOptions,
            resources,
            detection: DETECTION_OPTIONS,
            ns: ['common'],
            defaultNS: 'common',
            fallbackLng: 'en',
            interpolation: { escapeValue: false },
            saveMissing: false,
            react: {
                bindI18n: 'languageChanged',
                bindI18nStore: '',
                transEmptyNodeValue: '',
                transSupportBasicHtmlNodes: true,
                transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
                useSuspense: false,
            }
        });
}