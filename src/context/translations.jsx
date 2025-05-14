/**
 * translations.js - Language translation data
 * Import the JSON files for each language
 */
import enTranslations from '../data/locales/en.json';
import thTranslations from '../data/locales/th.json';
import zhTranslations from '../data/locales/zh.json';

// Export the translations object
const translations = {
    en: enTranslations,
    th: thTranslations,
    zh: zhTranslations
};

export default translations;
