import React, { useState, useTransition } from "react";

const tabs = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Relational Database</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Huaqiao University ( China ) Sep 2018 - Jun 2022
          <br />Majoring in Education of Chinese Language </li>
        <li>Generation Thailand Junior Software Developer Bootcamp (Cohort 8) Sep 2024 – Dec 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Generation Thailand Junior Software Developer Bootcamp</li>
        <li>Chinese Language HSK 5</li>
      </ul>
    ),
  },
];

const About = () => {
  // สถานะของแท็บที่เลือกในขณะนี้ (เริ่มต้นที่ 'skills')
  const [selectedTab, setSelectedTab] = useState("skills");
  // useTransition ใช้สำหรับการจัดการสถานะที่ต้องใช้เวลาในการโหลด (เช่น การเปลี่ยนแท็บ)
  const [isPending, setIsPending] = useTransition();

  // ฟังก์ชันที่ใช้เปลี่ยนแท็บเมื่อผู้ใช้คลิก
  const handleTabChange = (id) => {
    setIsPending(() => {
      setSelectedTab(id); // อัปเดตสถานะของแท็บที่เลือก
    });
  };

  return (
    <section className="w-full mb-20 mt-[5rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center">
          <img src="/Img/Profile0.jpg"
            className="rounded-xl md:rounded-3xl hover:scale-110 transition-transform hover:shadow-2xl hover:shadow-red-600"
            width={500} height={500} alt="aboutimg" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Completed Generation Thailand&apos;s Junior Software Developer Bootcamp (Cohort 8).
            With 1 year and 7 months of experience as an IT Project Coordinator (Chinese Skills Hsk5)
            and a 4-year degree in Education of Chinese Language from China,
            I have developed strong communication, teamwork, adaptability, management, and problem-solving skills. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficient in HTML, CSS, JavaScript, React, Node.js, Express, relational databases, and MongoDB.
            I am eager to contribute my skills and expertise to a company that values a growth mindset, achievement, motivation, and teamwork.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2">
            {tabs.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`${selectedTab === id
                  ? "bg-red-500 text-white"
                  : "text-black dark:text-white dark:bg-gray-800"
                  } p-2 font-bold hover:underline hover:text-white hover:bg-red-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600 active:bg-red-600 active:scale-90 rounded-sm`}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="mt-8">
            {/* การแสดงเนื้อหาของแท็บที่เลือก */}
            {tabs.find((tab) => tab.id === selectedTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;