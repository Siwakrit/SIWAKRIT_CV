import { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../context/translations";

const Contact = () => {
    const { language } = useLanguage();
    const text = translations[language].contactSection;

    const [alertMessage, setAlertMessage] = useState(null); // สร้าง state สำหรับการแจ้งเตือน
    const [alertType, setAlertType] = useState(''); // กำหนดประเภทของการแจ้งเตือน เช่น success, error
    const [timeoutId, setTimeoutId] = useState(null); // เก็บ id ของ timeout

    const handleAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);

        // เคลียร์ timeout เดิม (ถ้ามี)
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // ตั้งเวลาให้ข้อความหายไปหลังจาก 3 วินาที
        const id = setTimeout(() => {
            setAlertMessage(null);
        }, 3000);

        setTimeoutId(id);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value.trim(),
            email: event.target.email.value.trim(),
            subject: event.target.subject.value.trim(),
            message: event.target.message.value.trim(),
        };

        if (!formData.name) {
            handleAlert('Please enter your name.', 'error');
            return;
        }

        if (!formData.email) {
            handleAlert('Please enter your email.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            handleAlert('Please enter a valid email address.', 'error');
            return;
        }

        if (!formData.subject) {
            handleAlert('Please enter a subject.', 'error');
            return;
        }

        if (!formData.message) {
            handleAlert('Please enter a message.', 'error');
            return;
        }

        try {
            await fetch(
                'https://script.google.com/macros/s/AKfycbwJIW5DGnlFChxo9jF2NJ0OkT37jcvvzdXwj1ZCNB6kSu-nBxhlm-Fknx9-HbLRCWRQhQ/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                    mode: 'no-cors',
                }
            );

            handleAlert('Thank you for your message! We will get back to you as soon as possible.', 'success');
        } catch (error) {
            console.error('Error:', error);
            handleAlert('There was an error sending your message. Please try again later.', 'error');
        }
    };

    return (
        <div className='flex flex-col md:flex-row justify-center mb-[10rem] items-center md:items-center p-6 md:p-20 gap-8 h-screen w-[100%]' id='contact'>
            <div className='flex flex-col gap-5 md:w-1/2 items-center'>
                <button className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-32 md:w-40 text-center hover:bg-white hover:text-red-500'>
                    {text.contactMe}
                </button>
                <h1 className='text-2xl md:text-3xl font-bold hover:scale-110 hover:text-red-500 active:text-red-500'>{text.title}</h1>
                <div className='pt-2'>
                    {/* Contact Information */}
                    <div className='flex gap-5 items-center pb-5'>
                        <FaPhoneVolume className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.phone}</p>
                            <p className='hover:scale-110'>{text.phoneNumber}</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-5'>
                        <MdEmail className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.email}</p>
                            <p className='hover:scale-110'>{text.emailAddress}</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-5'>
                        <FaAddressCard className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.address}</p>
                            <p className='hover:scale-110'>{text.addressLocation}</p>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5 md:w-1/2'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Name" className='text-sm font-medium'>{text.name}</label>
                        <input
                            type="text"
                            name='name'
                            className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                            placeholder={text.placeholderName}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Email" className='text-sm font-medium'>{text.email}</label>
                        <input
                            type="email"
                            name='email'
                            className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                            placeholder={text.placeholderEmail}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Subject" className='text-sm font-medium'>{text.subject}</label>
                    <input
                        type="text"
                        name='subject'
                        className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                        placeholder={text.placeholderSubject}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Message" className='text-sm font-medium'>{text.message}</label>
                    <textarea
                        name='message'
                        className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform resize-none text-black h-40 md:h-48'
                        placeholder={text.placeholderMessage}
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-full md:w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
                >
                    {text.sendMessage}
                </button>
            </form>

            {/* การแสดงผล Alert */}
            {alertMessage && (
                <div className={`fixed bottom-10 right-10 p-4 w-80 text-white rounded-md shadow-lg transition-all ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    <p className="text-center">{alertMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Contact;
