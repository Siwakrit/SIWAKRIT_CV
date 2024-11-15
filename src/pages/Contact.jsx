    import React from 'react';
    import { FaPhoneVolume } from "react-icons/fa6";
    import { MdEmail } from "react-icons/md";
    import { FaAddressCard } from "react-icons/fa";

    const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center 
        w-screen items-center md:items-center p-6 md:p-20 gap-8 h-screen'
        id='contact'>
      {/* Contact Info Section */}
        <div className='flex flex-col gap-5 md:w-1/2 items-center'>
            <button className='bg-red-500 border border-red-500 rounded-md p-2 text-white font-bold w-32 md:w-40 text-center hover:bg-white hover:text-red-500'>
            Contact
            </button>
            <h1 className='text-2xl md:text-3xl font-bold hover:scale-110'>Get In Touch</h1>

            {/* Phone Info */}
            <div className='pt-2'>
            <div className='flex gap-5 items-center pb-5'>
            <FaPhoneVolume className='hover:scale-110' />
            <div>
                <p className='font-bold hover:scale-110'>Phone</p>
                <p className='hover:scale-110'>+66 91 035 7830</p>
            </div>
            </div>

            {/* Email Info */}
            <div className='flex gap-5 items-center pb-5'>
            <MdEmail className='hover:scale-110' />
            <div>
                <p className='font-bold hover:scale-110'>Email</p>
                <p className='hover:scale-110'>Mr.siwakrit@gmail.com</p>
            </div>
            </div>

            {/* Address Info */}
            <div className='flex gap-5 items-center pb-5'>
            <FaAddressCard className='hover:scale-110' />
            <div>
                <p className='font-bold hover:scale-110'>Address</p>
                <p className='hover:scale-110'>Thailand Bangkok</p>
            </div>
            </div>
            </div>
            
        </div>

        {/* Contact Form Section */}
        <form className='flex flex-col gap-5 md:w-1/2'>
            {/* Name and Email */}
            <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col w-full'>
                <label htmlFor="Name" className='text-sm font-medium'>Name</label>
                <input
                type="text"
                className='border border-slate-300 rounded-sm p-2 outline-cyan-500 hover:scale-105 transition-transform'
                placeholder='Your Name'
                />
            </div>

            <div className='flex flex-col w-full'>
                <label htmlFor="Email" className='text-sm font-medium'>Email</label>
                <input
                type="email"
                className='border border-slate-300 rounded-sm p-2 outline-cyan-500 hover:scale-105 transition-transform'
                placeholder='Your Email'
                />
            </div>
            </div>

            {/* Subject */}
            <div className='flex flex-col gap-2'>
            <label htmlFor="Subject" className='text-sm font-medium'>Subject</label>
            <input
                type="text"
                className='border border-slate-300 rounded-sm p-2 outline-cyan-500 hover:scale-105 transition-transform'
                placeholder='Subject'
            />
            </div>

            {/* Message */}
            <div className='flex flex-col gap-2'>
            <label htmlFor="Message" className='text-sm font-medium'>Message</label>
            <textarea
                className='border border-slate-300 rounded-sm p-2 outline-cyan-500 hover:scale-105 transition-transform resize-none 
                h-40 md:h-48'
                placeholder='Message'
            ></textarea>
            </div>

            {/* Submit Button */}
            <button
            className='bg-red-500 border border-red-500 rounded-md p-2 text-white font-bold w-full md:w-40 text-center hover:bg-white hover:text-red-500 transition-colors'
            >
            Send Message
            </button>
        </form>
        </div>
    );
    };

    export default Contact;
