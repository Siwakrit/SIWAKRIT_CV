import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebook, FaSun, FaMoon, FaGlobeAsia } from "react-icons/fa";
import { US, CN, TH } from 'country-flag-icons/react/3x2';
import { useDarkMode } from '../context/DarkModeContext'; // นำเข้า useDarkMode จาก context
import { useLanguage } from "../context/LanguageContext"; // ใช้ useLanguage
import translations from "../context/translations";

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // สร้าง state เพื่อควบคุมการสลับโลโก้
    const [menuOpen, setMenuOpen] = useState(false); // สร้าง state สำหรับเปิดปิดเมนูบนมือถือ
    const [languageDropdown, setLanguageDropdown] = useState(false); // สำหรับจัดการ dropdown ภาษา

    // ดึงค่า darkMode และ toggleDarkMode จาก context
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { language, setLanguage } = useLanguage(); // ดึงค่า language และ setLanguage
    const text = translations[language]; // ดึงข้อความตามภาษาที่เลือก

    const handleToggle = () => {
        setToggle(!toggle); // สลับค่าโลโก้
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // สลับสถานะเปิดปิดเมนู
    };    return (
        <div className='flex justify-between items-center gap-2 md:p-3 shadow-md w-full '>
            {/* โลโก้ */}
            <ul>
                <li>
                    {toggle === false ? (
                        <img src="Img/CS.png" alt="Web Logo"
                            className='hover:scale-110 hover:text-orange-500 animate-pulse transition-transform rounded-md'
                            width={80} height={50}
                            onClick={handleToggle}
                        />
                    ) : (
                        <img src="Img/95.png" alt="Web Logo"
                            className='hover:scale-110 hover:text-orange-500 animate-pulse transition-transform rounded-md'
                            width={80} height={50}
                            onClick={handleToggle}
                        />
                    )}
                </li>
            </ul>

            {/* เมนูบนเดสก์ท็อป */}            <ul className='hidden sm:flex justify-center items-center gap-2'>
                <li className='font-bold hover:bg-white hover:text-blue-500 dark:hover:bg-gray-900 transition-colors'>
                    <a href="#home">{text.home}</a>
                </li>
                <li className='font-bold  hover:bg-white hover:text-red-500  dark:hover:bg-gray-900 transition-colors'>
                    <a href="#contact">{text.contact}</a>
                </li> 
                <li className='font-bold hover:bg-white hover:text-rose-400  dark:hover:bg-gray-900 transition-colors'>
                    <a href="#about">{text.about}</a>
                </li>                <div className="relative">
                    <div 
                        className="flex items-center gap-2 font-bold rounded-md p-2 dark:text-white text-black transition-all cursor-pointer"
                        onClick={() => setLanguageDropdown(!languageDropdown)}
                    >
                        {language === 'en' && (
                            <span className="flex items-center gap-1">
                                <US className="w-5 h-3.5" />
                            </span>
                        )}
                        {language === 'zh' && (
                            <span className="flex items-center gap-1">
                                <CN className="w-5 h-3.5" />
                            </span>
                        )}
                        {language === 'th' && (
                            <span className="flex items-center gap-1">
                                <TH className="w-5 h-3.5" />
                            </span>
                        )}
                    </div>
                    <div 
                        className={`absolute right-0 mt-1 ${languageDropdown ? '' : 'hidden'} bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10 border border-gray-200 dark:border-gray-700`}
                    >
                        <div
                            className={`flex items-center gap-2 p-2 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer dark:text-white ${language === 'en' ? 'bg-green-50 dark:bg-green-900' : ''}`}
                            onClick={() => {
                                setLanguage('en');
                                setLanguageDropdown(false);
                            }}
                        >
                            <US className="w-6 h-4" /> 
                            {language === 'en' && <span className="ml-1 text-green-500">✓</span>}
                        </div>
                        <div
                            className={`flex items-center gap-2 p-2 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer dark:text-white ${language === 'zh' ? 'bg-green-50 dark:bg-green-900' : ''}`}
                            onClick={() => {
                                setLanguage('zh');
                                setLanguageDropdown(false);
                            }}
                        >
                            <CN className="w-6 h-4" />
                            {language === 'zh' && <span className="ml-1 text-green-500">✓</span>}
                        </div>
                        <div
                            className={`flex items-center gap-2 p-2 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer dark:text-white ${language === 'th' ? 'bg-green-50 dark:bg-green-900' : ''}`}
                            onClick={() => {
                                setLanguage('th');
                                setLanguageDropdown(false);
                            }}
                        >
                            <TH className="w-6 h-4" />
                            {language === 'th' && <span className="ml-1 text-green-500">✓</span>}
                        </div>
                    </div>
                </div>
            </ul>            {/* ส่วนขวาสุด: เมนูบนมือถือ, ไอคอนโซเชียล, และปุ่มสลับโหมด */}
            <div className='flex gap-3 items-center'>
                {/* เมนูบนมือถือ - แยกออกมาเพื่อให้ชัดเจน */}
                <div className="sm:hidden mr-2">
                    {/* ปุ่ม Hamburger Menu */}
                    <button 
                        onClick={handleMenuToggle} 
                        className="text-3xl bg-teal-400 dark:bg-teal-400/30 text-gray-800 dark:text-white rounded px-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                    {/* เมนูที่เปิด/ปิดในมือถือ */}
                    {menuOpen && (
                        <div className="absolute top-12 right-0 font-bold bg-neutral-800 dark:bg-gray-900 border border-neutral-800 dark:border-gray-700 rounded-md p-2 shadow-lg z-50">
                            <ul className="w-52">
                                <li className='mb-2 font-bold bg-blue-500 border border-blue-500 rounded-md p-2 hover:bg-white hover:text-blue-500 text-white'>
                                    <a href="#home">{text.home}</a>
                                </li>
                                <li className='mb-2 font-bold bg-red-500 border border-red-500 rounded-md p-2 hover:bg-white hover:text-red-500 text-white'>
                                    <a href="#contact">{text.contact}</a>
                                </li>
                                <li className='mb-2 font-bold bg-rose-400 border border-rose-400 rounded-md p-2 hover:bg-white hover:text-rose-400 text-white'>
                                    <a href="#about">{text.about}</a>
                                </li>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex items-center gap-2 font-bold bg-green-500 border border-green-500 rounded-md p-2 text-white">
                                        <FaGlobeAsia className="text-white" />
                                    </div>
                                    <div 
                                        className={`flex items-center gap-2 p-2 ${language === 'en' ? 'bg-green-700 text-white' : 'bg-white text-blue-500 dark:bg-gray-800 dark:text-blue-300'} rounded-md cursor-pointer hover:bg-green-100 dark:hover:bg-green-900 hover:text-blue-700`}
                                        onClick={() => setLanguage('en')}
                                    >
                                        <US className="w-6 h-4" /> 
                                        {language === 'en' && <span className="ml-auto">✓</span>}
                                    </div>
                                    <div 
                                        className={`flex items-center gap-2 p-2 ${language === 'zh' ? 'bg-green-700 text-white' : 'bg-white text-red-500 dark:bg-gray-800 dark:text-red-300'} rounded-md cursor-pointer hover:bg-green-100 dark:hover:bg-green-900 hover:text-red-700`}
                                        onClick={() => setLanguage('zh')}
                                    >
                                        <CN className="w-6 h-4" />
                                        {language === 'zh' && <span className="ml-auto">✓</span>}
                                    </div>
                                    <div 
                                        className={`flex items-center gap-2 p-2 ${language === 'th' ? 'bg-green-700 text-white' : 'bg-white text-blue-700 dark:bg-gray-800 dark:text-blue-300'} rounded-md cursor-pointer hover:bg-green-100 dark:hover:bg-green-900 hover:text-blue-900`}
                                        onClick={() => setLanguage('th')}
                                    >
                                        <TH className="w-6 h-4" />
                                        {language === 'th' && <span className="ml-auto">✓</span>}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
                
                {/* ไอคอนโซเชียลมีเดีย - จัดกลุ่มในกรอบเพื่อแยกให้ชัดเจน */}
                <ul className='flex gap-3 items-center border-r pr-3 mr-3 dark:border-gray-700'>
                    <li>
                        <Link to="https://github.com/Siwakrit" target='_blank' aria-label="GitHub">
                            <FaGithub className='hover:scale-110 hover:text-red-500 transition-transform' size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.facebook.com/shikabi" target='_blank' aria-label="Facebook">
                            <FaFacebook className='hover:scale-110 hover:text-blue-500 transition-transform' size={30} />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/siwakrit-pattaveesin/" target='_blank' aria-label="LinkedIn">
                            <FaLinkedinIn className='hover:scale-110 hover:text-blue-800 transition-transform' size={30} />
                        </Link>
                    </li>
                </ul>
                
                {/* ปุ่มสลับโหมด - แยกออกมาให้ชัดเจน */}
                <div onClick={toggleDarkMode} className='cursor-pointer' aria-label="Toggle dark mode">
                    {darkMode ? <FaSun className="text-yellow-500" size={30} /> : <FaMoon className="text-black-500" size={30} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
