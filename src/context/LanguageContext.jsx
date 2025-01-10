import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // ค่าเริ่มต้นเป็นภาษาอังกฤษ

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// สร้าง custom hook
export const useLanguage = () => {
    return useContext(LanguageContext);
};
