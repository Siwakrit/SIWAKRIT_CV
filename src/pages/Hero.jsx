import { useLanguage } from "../hooks/useLanguage"; // ใช้ useLanguage hook
import { FaCode, FaDownload, FaLaptopCode } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode"; // เพิ่ม import useDarkMode

const Hero = () => {  const { text } = useLanguage(); // ดึงข้อความตามภาษาที่เลือกจาก hook
  const { darkMode } = useDarkMode(); // ดึงค่า darkMode จาก context
  const [currentTypePhrase, setCurrentTypePhrase] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  
  // ใช้ useMemo เพื่อเก็บค่า typePhrases ไม่ให้สร้างใหม่ทุกครั้งที่ render
  const typePhrases = useState(["<Developer/>", "{Code}", "[React]", "(Node.js)"])[0];

  // Typing effect
  useEffect(() => {
    const phrase = typePhrases[typingIndex];
    let currentPhrase = "";
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < phrase.length) {
        currentPhrase += phrase.charAt(charIndex);
        setCurrentTypePhrase(currentPhrase);
        charIndex++;
      } else {
        // Wait a bit at the end of typing
        setTimeout(() => {
          // Reset and move to next phrase
          setTypingIndex((prev) => (prev + 1) % typePhrases.length);
        }, 1500);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [typingIndex, typePhrases]);  return (
    <div className="flex flex-col h-screen relative mb-[28rem] w-full md:flex-row" id="home">{/* Content wrapper with proper padding */}
      <div className="relative w-full py-24 md:py-28 flex flex-col md:flex-row gap-10 px-4 md:px-20">
        
        {/* Left section with text */}
        <div className="flex flex-col gap-6 md:justify-center w-full md:w-1/2">
          <div className="flex items-center gap-3">
            <HiTerminal className={`${darkMode ? 'text-cyan-400' : 'text-blue-500'} text-3xl animate-pulse`} />
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-500 text-transparent bg-clip-text">
              {text.greeting}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-800">
              {text.jobTitle}
            </h1>
            <div className="flex items-center gap-2 h-8">
              <FaCode className={`${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} />
              <span className={`text-xl font-mono ${darkMode ? 'text-cyan-400 border-cyan-400' : 'text-blue-500 border-blue-500'} border-r-2 pr-2 animate-pulse`}>
                {currentTypePhrase}
              </span>
            </div>
          </div>
          
          <div className="relative mt-2 backdrop-blur-sm bg-white/10 dark:bg-white/5 p-4 rounded-md border border-blue-300/30 dark:border-cyan-500/30">
            <div className="absolute -top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-500 dark:to-blue-600 text-xs text-white dark:text-black px-2 py-0.5 rounded-sm font-mono">
              README.md
            </div>
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} font-mono text-sm leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: text.description.replace(/\n/g, "<br/>") }} />
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <a
              href="/SIWAKRIT_CV.pdf"
              download
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-500 dark:to-blue-600 px-6 py-3 rounded-md text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/50 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaDownload className="group-hover:animate-bounce" />
              {text.downloadCV}
            </a>
            
            <div className={`flex items-center gap-2 ${darkMode ? 'text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10' : 'text-blue-500 border-blue-400/30 hover:bg-blue-500/10'} border px-4 py-3 rounded-md transition-colors`}>
              <FaLaptopCode />
              <span className="font-mono text-sm">Full Stack</span>
            </div>
          </div>
        </div>

        {/* Right section with image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="relative w-full h-full max-w-md">
            <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-cyan-500/20 to-blue-500/20' : 'from-blue-500/10 to-cyan-500/10'} rounded-lg transform rotate-3 scale-105`}></div>
            <img
              src="/Img/SKB_8689.jpg"
              className={`relative rounded-lg w-full h-full object-cover border ${darkMode ? 'border-cyan-500/50 shadow-cyan-500/20 hover:shadow-cyan-400/40' : 'border-blue-400/30 shadow-blue-400/10 hover:shadow-blue-400/30'} shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              alt="Profile"
            />
            <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-cyan-500'} text-white text-xs px-3 py-1 rounded-md font-mono transform rotate-3`}>
              <span className="animate-pulse">&#9679;</span> Online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
