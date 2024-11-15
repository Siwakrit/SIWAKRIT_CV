import React, { useState } from 'react';


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
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 3,
        title: 'Project 3',
        image: 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/453724427_1012735554187967_704478806821349242_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rNgQzN-mh08Q7kNvgHUxgdD&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ATBLIuB1KcJ9-oI2bddtN9-&oh=00_AYDvdqGWppAmNwLu4ekWlfJIme0_6-2TaOg-P5sjOBmfBg&oe=673A2D07',
        description: 'Description of Project 3',
        category: 'Game',
        technologies: 'React, Node.js, MongoDB',
        gitUrl: 'https://github.com/Siwakrit',
    },
    {
        id: 4,
        title: 'Project 4',
        image: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/434731397_929490665845790_4577085665797499038_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VIwtvs4nvTkQ7kNvgFzkvUg&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=Ayd2EH9yrQOORUfCtvAyLVY&oh=00_AYA5q5DmWraftCmnqVHc04EkSkul9UcPN8aggmWupSiwYw&oe=673A5CA0',
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
        image: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/428615330_899869495474574_128334498065336852_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VFqqPSgLGu0Q7kNvgHZSiMB&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AleH_EId8nfoya3pYWSDk9g&oh=00_AYCR6vm0EXPHTImyNra1xjiVwa7J7SfEkmxKmL9x5CX60w&oe=673AB62B',
        description: 'Description of Project 6', // แก้ไขคำอธิบายให้ถูกต้อง
        category: 'Game', // แก้ไขหมวดหมู่ให้ถูกต้อง
        technologies: 'React, Node.js, MongoDB', // แก้ไขเทคโนโลยีให้ถูกต้อง
        gitUrl: 'https://github.com/Siwakrit', // เพิ่มลิงค์ GitHub
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(3); // จำนวนโปรเจกต์ที่จะแสดงเริ่มต้น
    const [showSeeMoreButton, setShowSeeMoreButton] = useState(true); // สถานะสำหรับการแสดงปุ่ม See more

    const filterProjects = () => {
        if (selectedCategory === 'All') {
            return projects.slice(0, visibleProjectsCount); // แสดงจำนวนโปรเจกต์ตาม visibleProjectsCount
        }
        return projects.filter((project) => project.category === selectedCategory).slice(0, visibleProjectsCount);
    };

    const handleSeeMore = () => {
        setVisibleProjectsCount((prevCount) => {
            const newCount = prevCount + 3; // เพิ่มจำนวนโปรเจกต์ที่จะแสดงขึ้นอีก 3
            // ตรวจสอบว่าจำนวนโปรเจกต์ที่แสดงอยู่ถึงหรือเกินจำนวนทั้งหมดหรือไม่
            if (newCount >= filterProjects().length) {
                setShowSeeMoreButton(false); // ซ่อนปุ่ม See more ถ้าจำนวนโปรเจกต์ทั้งหมดแสดงหมดแล้ว
            }
            return newCount; // คืนค่าจำนวนใหม่
        });
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // เปลี่ยนหมวดหมู่ที่เลือก
        setVisibleProjectsCount(3); // รีเซ็ตจำนวนโปรเจกต์ที่จะแสดงเป็น 3
        setShowSeeMoreButton(true); // แสดงปุ่ม See more อีกครั้ง

        // ตรวจสอบจำนวนโปรเจกต์หลังจากกรอง
        const filteredProjects = projects.filter((project) => 
            category === 'All' || project.category === category
        );
        
        // ถ้าจำนวนโปรเจกต์กรองมีน้อยกว่า 4 จะซ่อนปุ่ม See more
        if (filteredProjects.length <= 3) {
            setShowSeeMoreButton(false);
        }
    };

    return (
        <div className="p-10 md:p-20 mb-[10rem]">
            <div className="flex justify-center">
                <h1 className="text-3xl md:text-3xl font-bold
                hover:scale-110 hover:text-red-500">My Projects</h1>
            </div>


            <ul className="flex justify-center items-center gap-3 md:gap-5 p-5 ">
                <li className="font-bold hover:scale-110 hover:text-red-500">
                    <button onClick={() => handleCategoryChange('All')}>All</button>
                </li>
                <li className="font-bold hover:scale-110 hover:text-red-500">
                    <button onClick={() => handleCategoryChange('Form')}>Form</button>
                </li>
                <li className="font-bold hover:scale-110 hover:text-red-500">
                    <button onClick={() => handleCategoryChange('Ecommerce')}>Ecommerce</button>
                </li>
                <li className="font-bold hover:scale-110 hover:text-red-500">
                    <button onClick={() => handleCategoryChange('Game')}>Game</button>
                </li>
            </ul>

            {/* ใช้ <a> เพื่อทำให้การ์ดคลิกได้ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 w-[100%] h-[100%]">
        
                {filterProjects().map((project) => (
                    <a key={project.id} href={project.gitUrl} target="_blank" rel="noopener noreferrer" 
                    className="border border-red-500 rounded-md px-5 p-2 
                    hover:scale-105 hover:shadow-2xl hover:shadow-rose-600
                    h-auto w-auto block bg-red-500 text-white">
                        <div className="flex justify-center w-[100%] h-[80%] ">
                            <img src={project.image} width={250} height={200} alt="" className="rounded-md  hover:scale-110 hover:shadow-2xl hover:shadow-rose-600 object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 md:pt-2 p-2">
                            <h1 className="text-xl font-bold hover:text-red-600">{project.title}</h1>
                            <p className="text-sm">{project.description}</p>
                            <p className="text-sm">Technologies used: {project.technologies}</p>
                        </div>
                    </a>
                ))}
            </div>

            {showSeeMoreButton && ( // ตรวจสอบว่าควรแสดงปุ่ม See more หรือไม่
                <div className='flex justify-center pt-5'>
                    <button 
                        onClick={handleSeeMore} 
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        See more
                    </button>
                </div>
            )}
            
        </div>
    );
};

export default Projects;