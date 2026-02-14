import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon: Icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <Icon className='w-16 h-16 text-white object-contain' />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <div className='flex flex-col lg:flex-row items-center gap-12'>
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
                >
                    <p className="mb-4">
                        I am a dedicated Junior Software Developer with hands-on experience in HTML, CSS, JavaScript, Flutter, PHP, MySQL, and SQL. I have worked on web systems, mobile applications, and database-driven projects focused on solving practical real-life challenges.
                    </p>
                    <p className="mb-4">
                        I am continuously improving my skills by building projects, exploring new technologies, and applying best practices in software development. I value teamwork, clear communication, and delivering reliable, scalable solutions.
                    </p>
                    <p>
                        I am currently seeking opportunities to grow, contribute to impactful projects, and gain deeper industry experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 1)}
                    className='hidden lg:flex w-[300px] h-[300px] justify-center items-center'
                >
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className='w-full h-full object-contain drop-shadow-[0_0_20px_rgba(145,94,255,0.5)] animate-pulse-slow'
                    />
                </motion.div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
