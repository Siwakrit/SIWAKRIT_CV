import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col h-screen mb-[2rem]
    w-[100%] md:flex-row p-10 md:p-20 gap-10'
      id='home'>
      {/* Left section with text */}
      <div className='flex flex-col gap-5 md:justify-center w-full md:w-1/2'>
        <p className='text-2xl font-bold hover:scale-110 hover:text-red-500 hover:underline transition-transform'>
          Hello, I&apos;m Fronk
        </p>
        <h1 className='text-3xl md:text-4xl font-bold hover:scale-110 hover:text-red-500 hover:underline transition-transform'>
          I&apos;m a full stack web developer
        </h1>
        <p className='hover:scale-105 hover:text-red-500 transition-transform'>
        Completed Generation Thailand's Junior Software Developer Bootcamp (Cohort 8). With 1 year and 7 months of experience as an IT Project Coordinator (Chinese Skills Hsk5) and a 4-year degree in Education of Chinese Language from China, I have developed strong communication, teamwork, adaptability, management, and problem-solving skills. 
            Proficient in HTML, CSS, JavaScript, React, Node.js, Express, relational databases, and MongoDB. Seeking a Software Developer position where I can contribute to a company that values achievement, motivation, and teamwork

        </p>
        <a
          href='/SIWAKRIT_CV.pdf' // ตั้งค่า href เพื่อชี้ไปยังไฟล์ PDF
          download // ใช้คุณสมบัติ download เพื่อให้ไฟล์ถูกดาวน์โหลดเมื่อคลิก
          className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
          onClick={(e) => { // การทำงานเมื่อคลิก
            if (!e.currentTarget.href) { // ตรวจสอบว่า href ของลิงก์ไม่ว่างหรือไม่
              e.preventDefault(); // หยุดการทำงานของลิงก์
              console.error('Download link is missing or invalid.');
            }
          }}
        >
          Download CV
        </a>
      </div>

      {/* Right section with image */}
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <img
          src='/Img/Profile1.jpg'
          width={1000}
          height={400}
          className='rounded-md hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform'
          alt='Profile'
        />
      </div>
    </div>
  );
};

export default Hero;
