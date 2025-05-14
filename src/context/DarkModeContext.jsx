import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

// สร้าง Context สำหรับ Dark Mode
const DarkModeContext = createContext();

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

// เพิ่ม PropTypes validation สำหรับ children
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// ส่งออกทั้ง Context และ Provider
export { DarkModeContext };
export default DarkModeProvider;
