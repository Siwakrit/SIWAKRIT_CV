import React, { useState } from 'react';

// กำหนดข้อมูลโปรเจกต์ทั้งหมดใน array
const projects = [
    {
        id: 1,
        title: 'Project 1',
        image: 'Img/SKB_7890.jpg',
        description: 'Description of Project 1',
        category: 'Form',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'https://pbs.twimg.com/media/GKiTwSMasAA-6wi?format=jpg&name=large',
        description: 'Description of Project 2',
        category: 'Ecommerce',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://siwakrit-cv.vercel.app/',
    },
    {
        id: 3,
        title: 'Project 3',
        image: 'https://pbs.twimg.com/media/Gb0zZPWXcAYhExO?format=jpg&name=large',
        description: 'Description of Project 3',
        category: 'Game',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 4,
        title: 'Project 4',
        image: 'https://pbs.twimg.com/media/GeX2vuvbUAQgWoh?format=jpg&name=4096x4096',
        description: 'Description of Project 4',
        category: 'Game',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 5,
        title: 'Project 5',
        image: 'https://pbs.twimg.com/media/GKiTwSMaUAAUSk9?format=jpg&name=large',
        description: 'Description of Project 5',
        category: 'Game',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 6,
        title: 'Project 6',
        image: 'https://pbs.twimg.com/media/Gc5jd9WaAAQSQjy?format=jpg&name=medium',
        description: 'Description of Project 6', 
        category: 'Game', 
        technologies: 'React, Node.js, MongoDB', 
        gitUrl: 'https://github.com/Siwakrit', 
    },
    {
        id: 7,
        title: 'Project 7',
        image: 'https://pbs.twimg.com/media/GcdaqJkWsAE_Kh4?format=jpg&name=large',
        description: 'Description of Project 7', 
        category: 'Ecommerce', 
        technologies: 'React, Node.js, MongoDB', 
        gitUrl: 'https://github.com/Siwakrit', 
    },
    {
        id: 8,
        title: 'Project 8',
        image: 'https://pbs.twimg.com/media/GcdaqJjWUAAALHg?format=jpg&name=large',
        description: 'Description of Project 8', 
        category: 'Ecommerce', 
        technologies: 'React, Node.js, MongoDB', 
        gitUrl: 'https://github.com/Siwakrit', 
    },
    {
        id: 9,
        title: 'Project 9',
        image: 'https://pbs.twimg.com/media/GZoabiSWQAUI97V?format=jpg&name=large',
        description: 'Fontend Ecommerce', 
        category: 'Ecommerce', 
        technologies: 'React, Node.js, TailwindCSS', 
        gitUrl: 'https://github.com/Siwakrit/Fake-Store-API-Ecommerce.git', 
    },
    {
        id: 10,
        title: 'Project 10',
        image: 'https://pbs.twimg.com/media/GV0rAoSbIAAOtQd?format=jpg&name=medium',
        description: 'Fontend Ecommerce', 
        category: 'Form', 
        technologies: 'React, Node.js, TailwindCSS', 
        gitUrl: 'https://github.com/Siwakrit/Fake-Store-API-Ecommerce.git', 
    },
    {
        id: 11,
        title: 'Project 11',
        image: 'https://pbs.twimg.com/media/GUsm9PCW4AAbZGt?format=jpg&name=medium',
        description: 'Fontend Ecommerce', 
        category: 'Form', 
        technologies: 'React, Node.js, TailwindCSS', 
        gitUrl: 'https://github.com/Siwakrit/Fake-Store-API-Ecommerce.git', 
    },
    {
        id: 12,
        title: 'Project 12',
        image: 'https://pbs.twimg.com/media/GeXBmI7XYAALQUJ?format=jpg&name=medium',
        description: 'Fontend Ecommerce', 
        category: 'Form', 
        technologies: 'React, Node.js, TailwindCSS', 
        gitUrl: 'https://github.com/Siwakrit/Fake-Store-API-Ecommerce.git', 
    },
];

const Projects = () => {
    // สร้าง state สำหรับเลือก category และจำนวนโปรเจกต์ที่จะแสดง
    const [selectedCategory, setSelectedCategory] = useState('All');// เริ่มต้นให้เลือกทั้งหมด
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);// เริ่มต้นให้แสดง 3 โปรเจกต์

    // ฟังก์ชันสำหรับกรองโปรเจกต์ตาม category ที่เลือก
    const filterProjects = () => {
        if (selectedCategory === 'All') {
            return projects;// หากเลือกทั้งหมดให้แสดงทุกโปรเจกต์
        }
        return projects.filter((project) => project.category === selectedCategory);// กรองตาม category
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
                <h1 className="text-3xl md:text-3xl font-bold hover:scale-110 hover:text-red-500">My Projects</h1>
            </div>

            <ul className="flex justify-center items-center gap-3 md:gap-5 p-5">
                {['All', 'Form', 'Ecommerce', 'Game'].map((category) => (
                    <li key={category} className="font-bold hover:scale-110 hover:text-red-500">
                        <button
                            className={
                                selectedCategory === category
                                    ? 'border-b-4 border-red-500 text-red-500'
                                    : 'hover:border-b-4 hover:border-red-500'
                            }
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl max-h-[100%] mx-auto p-4 w-[100%] h-[100%]">
                {visibleProjects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-red-500 rounded-md px-5 p-10 w-[100%] min-h-[fit] 
                        hover:scale-105 hover:shadow-2xl hover:shadow-rose-600 bg-red-500 text-white"
                    >
                        <div className="flex justify-center w-[100%] h-[fit]">
                            <img
                                src={project.image}
                                alt=""
                                className="rounded-md hover:scale-110 hover:shadow-2xl hover:shadow-rose-600 object-cover h-[450px] w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-2 pt-[2rem] p-2 ">
                            <h1 className="text-xl font-bold hover:text-red-600">{project.title}</h1>
                            <p className="text-sm flex-grow">{project.description}</p>
                            <p className="text-sm flex-grow">Technologies used: {project.technologies}</p>
                            <a className='text-sm flex-grow underline hover:text-blue-700 text-blue-500 hover:shadow-2xl hover:shadow-blue-600 active:text-blue-800' 
                            key={project.id} href={project.gitUrl} target="_blank" rel="noopener noreferrer">READ MORE</a>
                        </div>
                    </div>
                ))}
            </div>

            {hasMoreProjects && (
                <div className='flex justify-center pt-5'>
                    <button 
                        onClick={handleSeeMore} 
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:scale-110 hover:shadow-2xl hover:shadow-rose-600 hover:text-white active:bg-red-800 active:text-white'>
                        See more
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;