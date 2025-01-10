import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../context/translations";

const Contact = () => {
    const { language } = useLanguage();
    const text = translations[language].contactSection;  // เปลี่ยนเป็น contactSection

    return (
        <div className='flex flex-col md:flex-row justify-center mb-[10rem]
         items-center md:items-center p-6 md:p-20 gap-8 h-screen w-[100%]'
            id='contact'>
            {/* Contact Info Section */}
            <div className='flex flex-col gap-5 md:w-1/2 items-center'>
                <button className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-32 md:w-40 text-center hover:bg-white hover:text-red-500'>
                    Contact
                </button>
                <h1 className='text-2xl md:text-3xl font-bold hover:scale-110 hover:text-red-500 active:text-red-500'>{text.title}</h1>

                {/* Phone Info */}
                <div className='pt-2'>
                    <div className='flex gap-5 items-center pb-5'>
                        <FaPhoneVolume className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.phone}</p>
                            <p className='hover:scale-110'>{text.phoneNumber}</p>
                        </div>
                    </div>

                    {/* Email Info */}
                    <div className='flex gap-5 items-center pb-5'>
                        <MdEmail className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.email}</p>
                            <p className='hover:scale-110'>{text.emailAddress}</p>
                        </div>
                    </div>

                    {/* Address Info */}
                    <div className='flex gap-5 items-center pb-5'>
                        <FaAddressCard className='hover:scale-110' />
                        <div>
                            <p className='font-bold hover:scale-110'>{text.address}</p>
                            <p className='hover:scale-110'>{text.addressLocation}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Contact Form Section */}
            <form className='flex flex-col gap-5 md:w-1/2'>
                {/* Name and Email */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Name" className='text-sm font-medium'>{text.name}</label>
                        <input
                            type="text"
                            className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                            placeholder='Your Name'
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor="Email" className='text-sm font-medium'>{text.email}</label>
                        <input
                            type="email"
                            className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                            placeholder='Your Email'
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Subject" className='text-sm font-medium'>{text.subject}</label>
                    <input
                        type="text"
                        className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform text-black'
                        placeholder='Subject'
                    />
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Message" className='text-sm font-medium'>{text.message}</label>
                    <textarea
                        className='border border-slate-300 rounded-sm p-3 outline-cyan-500 hover:scale-105 transition-transform resize-none text-black
                h-40 md:h-48'
                        placeholder='Message'
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    className='bg-red-500 border border-red-500 rounded-md p-3 text-white font-bold w-full md:w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
                >
                    {text.sendMessage}
                </button>
            </form>
        </div>
    );
};

export default Contact;
