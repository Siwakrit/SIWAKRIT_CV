import { useLanguage } from "../context/LanguageContext"; // ใช้ useLanguage
import translations from "../context/translations";

const Hero = () => {
  const { language } = useLanguage(); // ดึงค่าภาษาจาก Context
  const text = translations[language]; // ดึงข้อความตามภาษาที่เลือก


  return (

    <div className="flex flex-col h-screen mb-[28rem] w-[100%] md:flex-row p-10 md:p-20 gap-10" id="home">
      {/* Left section with text */}
      <div className="flex flex-col gap-5 md:justify-center w-full md:w-1/2">
        <p className="text-2xl font-bold hover:scale-110 bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text animate-pulse">{text.greeting}</p>
        <h1 className="text-3xl md:text-4xl font-bold">{text.jobTitle}</h1>
        <p className="hover:scale-105" dangerouslySetInnerHTML={{ __html: text.description.replace(/\n/g, "<br/>") }} />
        <a
          href="/SIWAKRIT_CV.pdf"
          download
          className="bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-40 text-center hover:bg-white hover:text-red-500 transition-colors"
        >
          {text.downloadCV}
        </a>
      </div>

      {/* Right section with image */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src="/Img/SKB_8689.jpg"
          className="rounded-md hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform w-full h-full object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Hero;
