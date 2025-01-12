import React, { useState, useTransition } from 'react';
import translations from "../context/translations";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
    const { language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);
    const [isPending, startTransition] = useTransition();

    // ดึงข้อมูลจาก translations
    const text = translations[language];
    const projects = text.projects; // ดึงข้อมูลโปรเจกต์จาก translations

    // ฟังก์ชันสำหรับกรองโปรเจกต์ตาม category ที่เลือก
    const filterProjects = () => {
        if (selectedCategory === 'All') {
            return projects; // หากเลือกทั้งหมดให้แสดงทุกโปรเจกต์
        }
        return projects.filter((project) => project.category === selectedCategory); // กรองตาม category
    };

    // รับโปรเจกต์ที่กรองแล้วตาม category
    const filteredProjects = filterProjects();

    // แสดงโปรเจกต์ตามจำนวนที่กำหนด
    const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);

    // เช็คว่ามีโปรเจกต์เหลือให้แสดงหรือไม่
    const hasMoreProjects = visibleProjectsCount < filteredProjects.length;

    // ฟังก์ชันสำหรับแสดงโปรเจกต์เพิ่มเมื่อกด "See more"
    const handleSeeMore = () => {
        setVisibleProjectsCount((prevCount) => prevCount + 3);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setVisibleProjectsCount(3); // รีเซ็ตจำนวนโปรเจกต์ที่จะแสดงเมื่อเปลี่ยน category
    };

    return (
        <div className="p-10 md:p-20 mb-[10rem]">
            <div className="flex justify-center">
                <h1 className="text-3xl md:text-4xl font-bold hover:scale-110 hover:text-red-500">{text.projectTitle}</h1>
            </div>

            <ul className="flex justify-center items-center gap-3 md:gap-5 p-5">
                {['All', 'Form', 'Ecommerce', 'Game'].map((category) => (
                    <li key={category} className="font-bold hover:scale-110 hover:text-red-500">
                        <button
                            className={selectedCategory === category ? 'border-b-4 border-red-500 text-red-500' : 'hover:border-b-4 hover:border-red-500'}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {text[category]}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl max-h-[100%] mx-auto p-4 w-[100%] h-[100%]">
                {visibleProjects.map((project) => (
                    <div key={project.id} className="border border-red-500 rounded-md px-5 p-10 w-[100%] min-h-[fit] hover:scale-105 hover:shadow-2xl hover:shadow-rose-600 bg-red-500 text-white">
                        <div className="flex justify-center w-[100%] h-[fit]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-md hover:scale-110 hover:shadow-2xl hover:shadow-rose-600 object-cover h-[450px] w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-[2rem] p-2">
                            <h1 className="text-xl font-bold hover:text-red-600">{project.title}</h1>
                            <p className="text-sm flex-grow">{project.description}</p>
                            <p className="text-sm flex-grow">Technologies : {project.technologies}</p>
                            <a
                                className="text-sm flex-grow underline hover:text-blue-700 text-blue-500 hover:shadow-2xl hover:shadow-blue-600 active:text-blue-800"
                                href={project.gitUrl} target="_blank" rel="noopener noreferrer"
                            >
                                READ MORE
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {hasMoreProjects && (
                <div className="flex justify-center pt-5">
                    <button
                        onClick={handleSeeMore}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:scale-110 hover:shadow-2xl hover:shadow-rose-600 hover:text-white active:bg-red-800 active:text-white"
                    >
                        {text.seeMore}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;
