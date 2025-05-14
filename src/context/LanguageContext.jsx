import { createContext, useState } from "react";
import PropTypes from 'prop-types';

// สร้าง Context สำหรับภาษา
const LanguageContext = createContext();

// Provider component สำหรับให้บริการภาษาทั่วทั้งแอพ
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // ค่าเริ่มต้นเป็นภาษาอังกฤษ

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// เพิ่ม PropTypes validation สำหรับ children
LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// ส่งออก Context และ Provider
export { LanguageContext, LanguageProvider };
