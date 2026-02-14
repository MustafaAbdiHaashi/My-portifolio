import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";

import { styles } from "../styles";

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Mustafa Abdi Hussein</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        <TypingText text="IT Student | Full Stack Developer" /> <br className='sm:block hidden' />
                        I build Flutter app, Node.js,PHP systems, and modern web applications.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-[#915EFF] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary hover:bg-[#7e4ee0] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                        >
                            Contact Me <Send size={18} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1R30QhR1kqKiY_kNryqPFaAwvkuo8akN4/view?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border-2 border-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                        >
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </div>
            </div>


            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
