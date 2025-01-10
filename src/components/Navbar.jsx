import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebook, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from '../context/DarkModeContext'; // นำเข้า useDarkMode จาก context
import { useLanguage } from "../context/LanguageContext"; // ใช้ useLanguage
import translations from "../context/translations";




const Navbar = () => {
    const [toggle, setToggle] = useState(false); // สร้าง state เพื่อควบคุมการสลับโลโก้
    const [menuOpen, setMenuOpen] = useState(false); // สร้าง state สำหรับเปิดปิดเมนูบนมือถือ

    // ดึงค่า darkMode และ toggleDarkMode จาก context
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { language, setLanguage } = useLanguage(); // ดึงค่า language และ setLanguage
    const text = translations[language]; // ดึงข้อความตามภาษาที่เลือก

    const handleToggle = () => {
        setToggle(!toggle); // สลับค่าโลโก้
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // สลับสถานะเปิดปิดเมนู
    };

    return (
        <div className='flex justify-between items-center gap-2 md:p-3  shadow-md w-[100%]'>
            {/* โลโก้ */}
            <ul>
                <li>
                    {toggle === false ? (
                        <img src="Img/CS.png" alt="Web Logo"
                            className='hover:scale-110 hover:text-orange-500'
                            width={80} height={50}
                            onClick={handleToggle}
                        />
                    ) : (
                        <img src="Img/95.png" alt="Web Logo"
                            className='hover:scale-110 hover:text-orange-500'
                            width={80} height={50}
                            onClick={handleToggle}
                        />
                    )}
                </li>
            </ul>

            {/* เมนูบนเดสก์ท็อป */}
            <ul className='hidden sm:flex justify-center items-center gap-2 text-white'>
                <li className='font-bold bg-blue-500 border border-blue-500 rounded-md p-2 hover:bg-white hover:text-blue-500'>
                    {/* <a href="#home">Home</a> */}
                    <a href="#home">{text.home}</a>
                </li>
                <li className='font-bold bg-red-500 border border-red-500 rounded-md p-2 hover:bg-white hover:text-red-500'>
                    {/* <a href="#contact">Contact</a> */}
                    <a href="#contact">{text.contact}</a>
                </li>
                <li className='font-bold bg-rose-400 border border-rose-400 rounded-md p-2 hover:bg-white hover:text-rose-400'>
                    {/* <a href="#about">About</a> */}
                    <a href="#about">{text.about}</a>
                </li>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)} // เปลี่ยนภาษา
                    className='bg-green-500 border border-green-500 rounded-md p-2 hover:bg-green hover:text-g500 font-bold'
                >
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                    <option value="th">ไทย</option>
                </select>
            </ul>

            {/* เมนูบนมือถือ */}
            <div className="sm:hidden flex items-center">
                {/* ปุ่ม Hamburger Menu */}
                <button onClick={handleMenuToggle} className="text-3xl">
                    {menuOpen ? "✖️" : "☰"}
                </button>

                {/* เมนูที่เปิด/ปิดในมือถือ */}
                {menuOpen && (
                    <div className="absolute top-16 right-0 bg-blue-600 text-white w-[200px] p-4 rounded-md shadow-lg">
                        <ul>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#home">Home</a>
                            </li>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#contact">Contact</a>
                            </li>
                            <li className='font-bold p-2 hover:bg-white hover:text-blue-600'>
                                <a href="#about">About</a>
                            </li>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)} // เปลี่ยนภาษา
                                className='bg-green-500 border border-green-500 rounded-md p-2 hover:bg-green hover:text-g500 font-bold'
                            >
                                <option value="en">English</option>
                                <option value="zh">中文</option>
                                <option value="th">ไทย</option>
                            </select>
                        </ul>
                    </div>
                )}
            </div>

            {/* ลิงก์ไอคอนโซเชียล */}
            <ul className='flex gap-3'>
                <li>
                    <Link to="https://github.com/Siwakrit" target='_blank'>
                        <FaGithub className='hover:scale-110 hover:text-red-500' size={40} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/fzfronk/" target='_blank'>
                        <FaFacebook className='hover:scale-110 hover:text-blue-500' size={40} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/siwakrit-pattaveesin/" target='_blank'>
                        <FaLinkedinIn className='hover:scale-110 hover:text-blue-800' size={40} />
                    </Link>
                </li>
                {/* ปุ่มสลับโหมด */}
                <li onClick={toggleDarkMode} className='cursor-pointer'>
                    {darkMode ? <FaSun className="text-yellow-500" size={30} /> : <FaMoon className="text-black-500" size={30} />}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
