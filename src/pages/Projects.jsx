import { useState } from 'react';
import { useLanguage } from "../hooks/useLanguage";

const Projects = () => {
    const { text } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);
    // const [isPending, startTransition] = useTransition();    // ดึงข้อมูลโปรเจกต์
    const projects = text.projects; // ดึงข้อมูลโปรเจกต์จาก text ที่ได้จาก hook

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
        <>
            <div className="p-10 md:p-20 mb-[10rem] px-4 md:px-20">
                <div className="flex justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold hover:scale-110 hover:text-red-500">{text.projectTitle}</h1>
                </div>

                <ul className="flex justify-center items-center gap-3 md:gap-5 p-5">
                    {['All', 'Form', 'Ecommerce', 'Game'].map((category) => (
                        <li key={category} className="font-bold hover:scale-110 hover:text-cyan-400">
                            <button
                                className={selectedCategory === category ? 'border-b-4 border-cyan-400 text-cyan-300' : 'hover:border-b-4 hover:border-cyan-400'}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {text[category]}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4 w-full">
                    {visibleProjects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/60 via-cyan-700/40 to-blue-800/60 border border-cyan-300/40 shadow-[0_0_32px_8px_rgba(34,211,238,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_48px_16px_rgba(34,211,238,0.45)] hover:border-cyan-300/80 backdrop-blur-md before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[conic-gradient(from_90deg_at_50%_50%,#67e8f9_0%,#38bdf8_25%,#0ea5e9_50%,#38bdf8_75%,#67e8f9_100%)] before:blur-[12px]"
                        >
                            <div className="relative w-full h-[340px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                <h1 className="text-2xl font-bold text-white drop-shadow group-hover:text-cyan-200 transition-colors duration-300">{project.title}</h1>
                                <p className="text-sm text-white/80 flex-grow leading-relaxed">{project.description}</p>
                                <p className="text-xs text-cyan-200">Technologies: <span className="font-semibold text-white/90">{project.technologies}</span></p>
                                <a
                                    className="mt-2 inline-block text-sm font-bold underline underline-offset-4 text-cyan-200 hover:text-cyan-400 transition-colors duration-200"
                                    href={project.gitUrl} target="_blank" rel="noopener noreferrer"
                                >
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMoreProjects && (
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={handleSeeMore}
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 hover:from-cyan-300 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                        >
                            {text.seeMore}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Projects;
