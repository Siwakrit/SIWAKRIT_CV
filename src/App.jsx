import Hero from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import DarkModeProvider, { useDarkMode } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext";



function App() {
    const { darkMode } = useDarkMode(); // ใช้ Context เพื่อรับค่าจาก DarkModeProvider


    return (
        <LanguageProvider> {/* ห่อแอปด้วย LanguageProvider */}
            <div
                className={`${darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
                    }`}
            >
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default function AppWrapper() {
    return (
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    );
}
