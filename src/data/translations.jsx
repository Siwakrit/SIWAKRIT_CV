/**
 * translations.js - Language translation data
 * Import the JSON files for each language
 */
import enTranslations from './locales/en.json';
import thTranslations from './locales/th.json';
import zhTranslations from './locales/zh.json';

// Export the translations object
const translations = {
    en: enTranslations,
    th: thTranslations,
    zh: zhTranslations
};

export default translations;
