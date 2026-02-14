import { Github, Linkedin, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className='bg-primary py-8 text-center text-white relative z-10'>
            <div className='flex justify-center gap-6 mb-4'>
                <a href='https://github.com/' target="_blank" rel="noreferrer" className='hover:text-secondary transition duration-300'>
                    <Github className='w-6 h-6' />
                </a>
                <a href='https://www.linkedin.com/feed/' target="_blank" rel="noreferrer" className='hover:text-secondary transition duration-300'>
                    <Linkedin className='w-6 h-6' />
                </a>
                <a href='https://wa.me/252613282262' target="_blank" rel="noreferrer" className='hover:text-secondary transition duration-300'>
                    <MessageCircle className='w-6 h-6' />
                </a>
            </div>
            <p className='text-sm text-secondary'>
                &copy; {new Date().getFullYear()} Mustafa. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
