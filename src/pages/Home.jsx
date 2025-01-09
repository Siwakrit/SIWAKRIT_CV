import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col h-screen mb-[28rem] w-[100%] md:flex-row p-10 md:p-20 gap-10' id='home'>
      {/* Left section with text */}
      <div className='flex flex-col gap-5 md:justify-center w-full md:w-1/2'>
        <p className='text-2xl font-bold hover:scale-110'>
          Hello, I&apos;m Fronk
        </p>
        <h1 className='text-3xl md:text-4xl font-bold'>
          I&apos;m a full stack web developer
        </h1>
        <p className='hover:scale-105'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m a full stack web developer with a passion for creating
          exceptional digital experiences. With a strong foundation in HTML,
          CSS, JavaScript, React, Node.js, Express, relational databases, and
          MongoDB. I open to job opportunities where I can contribute to a
          company that values achievement, motivation, and teamwork.
        </p>
        <a
          href='/SIWAKRIT_CV.pdf' // ตั้งค่า href เพื่อชี้ไปยังไฟล์ PDF
          download // ใช้คุณสมบัติ download เพื่อให้ไฟล์ถูกดาวน์โหลดเมื่อคลิก
          className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
        >
          Download CV
        </a>
      </div>

      {/* Right section with image */}
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <img
          src='/Img/SKB_8689.jpg'
          className='rounded-md hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform w-full h-full object-cover'
          alt='Profile'
        />
      </div>
    </div>
  );
};

export default Hero;
