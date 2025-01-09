import { useState, useEffect, createContext, useContext } from "react";

// สร้าง Context สำหรับ Dark Mode
const DarkModeContext = createContext();

// Custom Hook เพื่อใช้ Context นี้ได้สะดวก
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

// Utility function สำหรับจัดการ class ของ Dark Mode
const applyDarkModeClass = (isDarkMode) => {
    document.body.classList.toggle("dark", isDarkMode);
};

// Provider สำหรับแจกจ่าย Context
const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // โหลดสถานะจาก localStorage หรือระบบปฏิบัติการ
        const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (savedDarkMode !== null) {
            setDarkMode(savedDarkMode);
            applyDarkModeClass(savedDarkMode);
        } else {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(prefersDarkMode);
            applyDarkModeClass(prefersDarkMode);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        applyDarkModeClass(newDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
