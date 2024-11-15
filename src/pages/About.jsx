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
        <li>Reletional Database</li>
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
  const [selectedTab, setSelectedTab] = useState("skills");
  const [isPending, setIsPending] = useTransition();

  const handleTabChange = (id) => {
    setIsPending(() => {
      setSelectedTab(id);
    });
  };

  return (
    <section className="text-black w-[100%] mb-[2rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center">
        <img src="/Img/Profile0.jpg" 
        className="rounded-xl md:rounded-3xl hover:scale-110 
        transition-transform hover:shadow-2xl hover:shadow-red-600"
        width={500} height={500} alt="aboutimg" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg hover:scale-105 hover:text-red-500">
          I have completed Generation Thailand's Junior Software Developer Bootcamp (Cohort 8). With 1 year and 7 months of experience as an 
          IT Project Coordinator (Chinese Skills) and a 4-year degree in Education of Chinese Language from China, 
          I have developed strong communication, teamwork, adaptability, management, and problem-solving skills. 
          My technical skills include HTML, CSS, JavaScript, React, Node.js, Express, relational databases, and MongoDB. 
          I am seeking a Software Developer position where I can contribute to a company that values achievement, motivation, and teamwork.

          </p>
          <div className="flex flex-row justify-start mt-8 gap-2">
            {tabs.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={selectedTab === id ? "bg-red-500 rounded-sm text-white p-2 hover:underline hover:text-white hover:bg-red-500": ""}
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


