import { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

const Contact = () => {
    const { text } = useLanguage();
    // ดึงข้อมูลเฉพาะส่วน contactSection
    const contactText = text.contactSection;

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
        <>
        <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-3xl md:max-w-4xl xl:max-w-6xl mx-auto py-8 px-2 md:px-8 lg:px-16' id='contact'>
            <div className='flex flex-col gap-4 md:w-1/2 w-full items-center md:items-start'>
                <button className='bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 border-none rounded-md p-2 text-white font-bold w-32 md:w-36 text-center shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-blue-600 transition-all'>
                    {contactText.contactMe}
                </button>
                <h1 className='text-xl md:text-2xl font-bold hover:scale-110 hover:text-cyan-400 active:text-cyan-400 transition-colors'>{contactText.title}</h1>
                <div className='pt-1 w-full'>
                    {/* Contact Information */}
                    <div className='flex gap-4 items-center pb-3'>
                        <FaPhoneVolume className='text-cyan-400 text-xl' />
                        <div>
                            <p className='font-bold text-cyan-200'>{contactText.phone}</p>
                            <p>{contactText.phoneNumber}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center pb-3'>
                        <MdEmail className='text-cyan-400 text-xl' />
                        <div>
                            <p className='font-bold text-cyan-200'>{contactText.email}</p>
                            <p>{contactText.emailAddress}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center pb-3'>
                        <FaAddressCard className='text-cyan-400 text-xl' />
                        <div>
                            <p className='font-bold text-cyan-200'>{contactText.address}</p>
                            <p>{contactText.addressLocation}</p>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:w-1/2 w-full'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-3'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Name" className='text-sm font-medium text-cyan-200'>{contactText.name}</label>
                        <input
                            type="text"
                            name='name'
                            className='border border-cyan-300/40 rounded-md p-2 outline-cyan-500 bg-white/80 text-black focus:ring-2 focus:ring-cyan-400 transition-all text-base md:text-sm'
                            placeholder={contactText.placeholderName}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Email" className='text-sm font-medium text-cyan-200'>{contactText.email}</label>
                        <input
                            type="email"
                            name='email'
                            className='border border-cyan-300/40 rounded-md p-2 outline-cyan-500 bg-white/80 text-black focus:ring-2 focus:ring-cyan-400 transition-all text-base md:text-sm'
                            placeholder={contactText.placeholderEmail}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Subject" className='text-sm font-medium text-cyan-200'>{contactText.subject}</label>
                    <input
                        type="text"
                        name='subject'
                        className='border border-cyan-300/40 rounded-md p-2 outline-cyan-500 bg-white/80 text-black focus:ring-2 focus:ring-cyan-400 transition-all text-base md:text-sm'
                        placeholder={contactText.placeholderSubject}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Message" className='text-sm font-medium text-cyan-200'>{contactText.message}</label>
                    <textarea
                        name='message'
                        className='border border-cyan-300/40 rounded-md p-2 outline-cyan-500 bg-white/80 text-black focus:ring-2 focus:ring-cyan-400 transition-all resize-none h-20 md:h-28 text-base md:text-sm'
                        placeholder={contactText.placeholderMessage}
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 border-none rounded-md p-2 text-white font-bold w-full md:w-32 text-center shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-blue-600 transition-all text-base md:text-sm'
                >
                    {contactText.sendMessage}
                </button>
            </form>

            {/* การแสดงผล Alert */}
            {alertMessage && (
                <div className={`fixed bottom-10 right-10 p-4 w-80 text-white rounded-md shadow-lg transition-all ${alertType === 'success' ? 'bg-cyan-500' : 'bg-red-500'}`}>
                    <p className="text-center">{alertMessage}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Contact;
