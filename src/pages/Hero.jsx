import { useLanguage } from "../hooks/useLanguage"; // ใช้ useLanguage hook
import { FaCode, FaDownload, FaLaptopCode, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { SiNextdotjs, SiTypescript, SiNestjs, SiPostgresql, SiMongodb } from "react-icons/si";
import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode"; // เพิ่ม import useDarkMode
import { Helmet } from "react-helmet";

const Hero = () => {  
  const { text } = useLanguage(); // ดึงข้อความตามภาษาที่เลือกจาก hook
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
  }, [typingIndex, typePhrases]);  

  return (
    <>
      <Helmet>
        <title>Siwakrit Pattaveesin | Portfolio</title>
        <meta name="description" content="Portfolio ของ Siwakrit Pattaveesin แสดงผลงาน, ทักษะ, และประสบการณ์ด้าน Full Stack Developer (Next.js, React, Node.js, TypeScript, PostgreSQL, Docker, MongoDB)" />
        <meta property="og:title" content="Siwakrit Pattaveesin | Portfolio" />
        <meta property="og:description" content="รวมผลงานและประสบการณ์ของ Siwakrit Pattaveesin Full Stack Developer" />
        <meta property="og:image" content="/Img/SKB_8689.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siwakrit Pattaveesin | Portfolio" />
        <meta name="twitter:description" content="รวมผลงานและประสบการณ์ของ Siwakrit Pattaveesin Full Stack Developer" />
        <meta name="twitter:image" content="/Img/SKB_8689.jpg" />
      </Helmet>
      <div className="flex flex-col h-auto min-h-screen relative mb-32 pb-32 md:mb-20 md:pb-0 w-full md:flex-row overflow-x-hidden px-4 md:px-20" id="home">
        {/* Content wrapper with proper padding */}
        <div className="relative w-full py-12 md:py-20 flex flex-col md:flex-row gap-10 px-2 md:px-6 lg:px-10 overflow-x-hidden">
          
          {/* Left section with text */}
          <div className="flex flex-col gap-6 md:justify-center w-full md:w-1/2 min-w-0">
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
          <div className="flex justify-center items-center w-full md:w-1/2 mt-6 md:mt-0 mb-8 md:mb-0 min-w-0">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              {/* Profile image with glow ring only around the image */}
              <div className="relative w-full">
                <div className={`absolute inset-0 pointer-events-none rounded-lg z-10 block
                  ${darkMode ? 'ring-4 ring-cyan-400/70 shadow-[0_0_40px_#22d3ee99] animate-pulse' : 'ring-4 ring-blue-400/60 shadow-[0_0_32px_#60a5fa88] animate-pulse'}`}
                />
                <img
                  src="/Img/SKB_8689.jpg"
                  className="w-full h-[28rem] md:h-[32rem] lg:h-[42rem] relative rounded-lg object-cover z-20 shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  alt="Profile"
                />
                {/* Online status button overlayed at bottom right of image */}
                <div className={`absolute bottom-3 right-3 bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-cyan-500'} text-white text-xs px-3 py-1 rounded-md font-mono transform rotate-3 z-30 shadow-md`}>
                  <span className="animate-pulse">&#9679;</span> Online
                </div>
              </div>
              {/* Tech icons row under profile image */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-6 select-none pb-6">
                {/* Row 1 */}
                <span className="text-3xl md:text-4xl text-cyan-400 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <FaReact title="React.js" />
                </span>
                <span className="text-3xl md:text-4xl text-gray-900 dark:text-white drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <SiNextdotjs title="Next.js" />
                </span>
                <span className="text-3xl md:text-4xl text-blue-500 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <SiTypescript title="TypeScript" />
                </span>
                <span className="text-3xl md:text-4xl text-green-500 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <FaNodeJs title="Node.js" />
                </span>
                <span className="text-3xl md:text-4xl text-red-500 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <SiNestjs title="Nest.js" />
                </span>
                {/* Row 2 */}
                <span className="text-3xl md:text-4xl text-blue-600 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <SiPostgresql title="PostgreSQL" />
                </span>
                <span className="text-3xl md:text-4xl text-blue-400 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <FaDocker title="Docker" />
                </span>
                <span className="text-3xl md:text-4xl text-green-600 drop-shadow-glow-cyan hover:scale-110 transition-transform duration-200">
                  <SiMongodb title="MongoDB" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
