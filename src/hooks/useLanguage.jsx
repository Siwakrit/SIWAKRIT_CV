import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/translations";

/**
 * Custom hook สำหรับเข้าถึง language context
 * @returns {Object} language context พร้อมด้วยข้อความตามภาษาที่เลือก
 */
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    
    const { language, setLanguage } = context;
    const text = translations[language];
    
    return { language, setLanguage, text };
};
