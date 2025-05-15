import { useState, useTransition } from "react";
import { useLanguage } from "../hooks/useLanguage"; // ใช้ custom hook จากไฟล์ที่ถูกต้อง

const About = () => {
  const { text } = useLanguage(); // ดึงข้อความตามภาษาที่เลือก
  const [selectedTab, setSelectedTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setSelectedTab(id);
    });
  };
  const tabs = Object.entries(text.tabs).map(([key, value]) => ({
    id: key,
    title: value.title,
    content: (
      <ul className="list-disc pl-6 space-y-2 marker:text-cyan-400 text-black dark:text-white/90">
        {value.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className="w-full mb-20 mt-[5rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-2 sm:px-4 xl:gap-16 sm:py-12 xl:px-16 max-w-5xl 2xl:max-w-7xl mx-auto w-full">
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/Img/Profile0.jpg"
            className="rounded-3xl shadow-2xl border-4 border-cyan-400/40 bg-gradient-to-br from-blue-900/60 via-cyan-700/40 to-blue-800/60 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_32px_8px_rgba(34,211,238,0.45)] hover:border-cyan-300/80 w-72 h-[28rem] sm:w-96 sm:h-[34rem] md:w-[520px] md:h-[700px] object-cover"
            alt="aboutimg"
          />
        </div>
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full w-full px-1 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-cyan-700 dark:text-cyan-200 drop-shadow">{text.aboutMeTitle}</h2>
          <div className="text-sm sm:text-base lg:text-lg text-black dark:text-white/90" dangerouslySetInnerHTML={{ __html: text.aboutMeDescription.replace(/\n/g, "<br/>") }} />
          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2 sm:gap-3">
            {tabs.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`${
                  selectedTab === id
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-white shadow-lg shadow-cyan-400/40 ring-2 ring-cyan-300"
                    : "text-cyan-700 dark:text-cyan-200 bg-blue-100 dark:bg-blue-900 border border-cyan-200/40"
                } ${isPending ? "opacity-70" : ""} px-4 py-2 font-bold rounded-xl transition-all duration-200 hover:scale-105 hover:bg-cyan-100/80 hover:text-cyan-700 hover:shadow-cyan-200/40 focus:outline-none text-xs sm:text-sm`}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="mt-6 sm:mt-8">
            <ul className="list-disc pl-5 space-y-2 marker:text-cyan-400 text-black dark:text-white/90 text-xs sm:text-base">
              {tabs.find((tab) => tab.id === selectedTab)?.content.props.children}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
