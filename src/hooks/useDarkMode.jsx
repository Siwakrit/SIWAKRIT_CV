import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

// Custom Hook เพื่อใช้ Context นี้ได้สะดวก
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
