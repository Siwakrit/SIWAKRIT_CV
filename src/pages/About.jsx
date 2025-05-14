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
      <ul className="list-disc pl-2">
        {value.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className="w-full mb-20 mt-[5rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center">
          <img
            src="/Img/Profile0.jpg"
            className="rounded-xl md:rounded-3xl hover:scale-110 transition-transform hover:shadow-2xl hover:shadow-red-600"
            width={500}
            height={500}
            alt="aboutimg"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.aboutMeTitle}</h2>
          <div className="text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: text.aboutMeDescription.replace(/\n/g, "<br/>") }} />
          <div className="flex flex-row justify-start mt-8 gap-2">
            {tabs.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`${
                  selectedTab === id
                    ? "bg-red-500 text-white"
                    : "text-black dark:text-white dark:bg-gray-800"
                } ${isPending ? "opacity-70" : ""} p-2 font-bold hover:underline hover:text-white hover:bg-red-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600 active:bg-red-600 active:scale-90 rounded-sm`}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="mt-8">
            {tabs.find((tab) => tab.id === selectedTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
