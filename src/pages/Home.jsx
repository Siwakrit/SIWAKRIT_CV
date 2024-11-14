import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col h-screen md:flex-row p-10 md:p-20 gap-10'>
      {/* Left section with text */}
      <div className='flex flex-col gap-5 md:justify-center w-full md:w-1/2'>
        <p className='text-2xl font-bold hover:scale-110 hover:text-red-500 hover:underline transition-transform'>
          Hello, I&apos;m Fronk
        </p>
        <h1 className='text-3xl md:text-4xl font-bold hover:scale-110 hover:text-red-500 hover:underline transition-transform'>
          I&apos;m a full stack web developer
        </h1>
        <p className='hover:scale-105 hover:text-red-500 transition-transform'>
          I&apos;m a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Node.js, Express, TailwindCSS,
          MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
        <a
          href=''
          download='CV.pdf'
          className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
        >
          Download CV
        </a>
      </div>

      {/* Right section with image */}
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <img
          src='public/Img/Profile1.jpg'
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
