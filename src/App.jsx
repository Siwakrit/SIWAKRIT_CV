import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import DarkModeProvider from "./context/DarkModeContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
    const { darkMode } = useDarkMode(); // ใช้ Context เพื่อรับค่าจาก DarkModeProvider

    return (
        <LanguageProvider> {/* ห่อแอปด้วย LanguageProvider */}
            <div
                className= 
                {`relative ${darkMode 
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" 
                    : "bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-100 text-gray-900"}`}
            >
                {/* Global Cyber Background Elements */}
                <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    {/* Light/Dark mode glowing elements */}
                    <div className="absolute top-10 left-1/4 w-20 h-20 rounded-full bg-cyan-200 dark:bg-blue-400 blur-xl opacity-50 dark:opacity-30"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-200 dark:bg-cyan-300 blur-xl opacity-50 dark:opacity-30"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-indigo-200 dark:bg-purple-400 blur-xl opacity-50 dark:opacity-30"></div>
                    
                    {/* Code-like grid lines - Different colors for light/dark mode */}
                    <div className="grid grid-cols-12 gap-2 h-full w-full">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={`col-${i}`} className="h-full border-r border-blue-300/20 dark:border-cyan-500/10"></div>
                        ))}
                    </div>
                    
                    <div className="grid grid-rows-12 gap-2 h-full w-full">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={`row-${i}`} className="w-full border-b border-blue-300/20 dark:border-cyan-500/10"></div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 min-h-screen pb-24">
                    <Navbar />
                    {/* เอา padding ออก แล้วให้แต่ละ sectionจัดการเอง */}
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </div>
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
