import React from 'react'

const translations = {
    en: {
        home: "Home",
        contact: "Contact",
        about: "About",
        greeting: "Hello, I'm Fronk",
        jobTitle: "I'm a full stack web developer",
        description:
            "I'm a full stack web developer with a passion for creating exceptional digital experiences. With a strong foundation in HTML, CSS, JavaScript, React, Node.js, Express, relational databases, and MongoDB. I am open to job opportunities where I can contribute to a company that values achievement, motivation, and teamwork.",
        downloadCV: "Download CV",
        aboutMeTitle: "About Me",
        aboutMeDescription: `Completed Generation Thailand's Junior Software Developer Bootcamp (Cohort 8).
      With 1 year and 7 months of experience as an IT Project Coordinator (Chinese Skills HSK5)
      and a 4-year degree in Education of Chinese Language from China,
      I have developed strong communication, teamwork, adaptability, management, and problem-solving skills.
      Proficient in HTML, CSS, JavaScript, React, Node.js, Express, relational databases, and MongoDB.
      I am eager to contribute my skills and expertise to a company that values a growth mindset, achievement, motivation, and teamwork.`,
        tabs: {
            skills: {
                title: "Skills",
                content: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express",
                    "Relational Database",
                    "MongoDB",
                ],
            },
            education: {
                title: "Education",
                content: [
                    "Huaqiao University (China) Sep 2018 - Jun 2022: Majoring in Education of Chinese Language",
                    "Generation Thailand Junior Software Developer Bootcamp (Cohort 8) Sep 2024 – Dec 2024",
                ],
            },
            certifications: {
                title: "Certifications",
                content: [
                    "Generation Thailand Junior Software Developer Bootcamp",
                    "Chinese Language HSK 5",
                ],
            },
        },
        'All': 'All',
        'Form': 'Form',
        'Ecommerce': 'Ecommerce',
        'Game': 'Game',
    },
    th: {
        home: "หน้าแรก",
        contact: "ติดต่อ",
        about: "เกี่ยวกับ",
        greeting: "สวัสดี, ผมชื่อฟรองค์",
        jobTitle: "ผมเป็นนักพัฒนาเว็บ Full Stack",
        description:
            "ผมเป็นนักพัฒนาเว็บ Full Stack ที่มีความหลงใหลในสร้างประสบการณ์ดิจิทัลที่ยอดเยี่ยม ด้วยความเชี่ยวชาญใน HTML, CSS, JavaScript, React, Node.js, Express, ฐานข้อมูลเชิงสัมพันธ์ และ MongoDB ผมเปิดรับโอกาสงานที่สามารถช่วยพัฒนาบริษัทที่ให้ความสำคัญกับความสำเร็จ แรงจูงใจ และการทำงานเป็นทีม",
        downloadCV: "ดาวน์โหลด CV",
        aboutMeTitle: "เกี่ยวกับฉัน",
        aboutMeDescription: `สำเร็จหลักสูตร Generation Thailand Junior Software Developer Bootcamp (Cohort 8)
      มีประสบการณ์ 1 ปี 7 เดือนในตำแหน่ง IT Project Coordinator (HSK ระดับ 5)
      และจบการศึกษาระดับปริญญาตรีสาขาการศึกษาภาษาจีนจากประเทศจีน
      มีทักษะการสื่อสาร การทำงานเป็นทีม การปรับตัว การบริหารจัดการ และการแก้ปัญหา
      เชี่ยวชาญใน HTML, CSS, JavaScript, React, Node.js, Express, ฐานข้อมูลเชิงสัมพันธ์ และ MongoDB
      พร้อมที่จะนำความสามารถและความเชี่ยวชาญมาช่วยองค์กรที่ให้ความสำคัญกับการเติบโตและการทำงานเป็นทีม.`,
        tabs: {
            skills: {
                title: "ทักษะ",
                content: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express",
                    "ฐานข้อมูลเชิงสัมพันธ์",
                    "MongoDB",
                ],
            },
            education: {
                title: "การศึกษา",
                content: [
                    "มหาวิทยาลัยหัวเฉียว (ประเทศจีน) กันยายน 2018 - มิถุนายน 2022: วิชาเอกการศึกษาภาษาจีน",
                    "Generation Thailand Junior Software Developer Bootcamp (Cohort 8) กันยายน 2024 – ธันวาคม 2024",
                ],
            },
            certifications: {
                title: "ใบรับรอง",
                content: [
                    "Generation Thailand Junior Software Developer Bootcamp",
                    "HSK ระดับ 5",
                ],
            },
        },
        'All': 'ทั้งหมด',
        'Form': 'ฟอร์ม',
        'Ecommerce': 'อีคอมเมิร์ซ',
        'Game': 'เกม',
    },
    zh: {
        home: "主页",
        contact: "联系",
        about: "关于",
        greeting: "你好, 我是Fronk",
        jobTitle: "我是全栈网络开发人员",
        description:
            "我是一个充满热情的全栈网络开发人员，专注于创建卓越的数字体验。我在HTML、CSS、JavaScript、React、Node.js、Express、关系型数据库和MongoDB方面拥有扎实的基础。我开放接受可以为注重成就、动力和团队合作的公司做出贡献的工作机会。",
        downloadCV: "下载简历",
        aboutMeTitle: "关于我",
        aboutMeDescription: `完成了 Generation Thailand Junior Software Developer Bootcamp (第八期)
      拥有 1 年 7 个月的 IT 项目协调员经验 (HSK5级)
      并在中国完成了四年的中文教育专业本科课程。
      我具备良好的沟通、团队合作、适应能力、管理和解决问题的能力。
      熟练掌握 HTML、CSS、JavaScript、React、Node.js、Express、关系数据库和 MongoDB。
      希望将我的技能和专业知识贡献给一个重视成长思维和团队合作的公司。`,
        tabs: {
            skills: {
                title: "技能",
                content: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express",
                    "关系型数据库",
                    "MongoDB",
                ],
            },
            education: {
                title: "教育背景",
                content: [
                    "华侨大学（中国） 2018 年 9 月 - 2022 年 6 月：主修中文教育",
                    "Generation Thailand Junior Software Developer Bootcamp (第八期) 2024 年 9 月 – 2024 年 12 月",
                ],
            },
            certifications: {
                title: "证书",
                content: [
                    "Generation Thailand Junior Software Developer Bootcamp",
                    "汉语水平考试 HSK 5",
                ],
            },
        },
        'All': '全部',
        'Form': '表单',
        'Ecommerce': '电子商务',
        'Game': '游戏',
    },
};

export default translations;
