import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const TechCard = ({ index, name, icon: Icon }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className='w-28 h-28 flex flex-col justify-center items-center bg-tertiary rounded-full border-2 border-[#1f1b3c] shadow-card hover:border-[#915eff] transition-colors duration-300'
        >
            <Icon className='w-10 h-10 text-white mb-2' />
            <p className='text-secondary text-[12px] font-bold'>{name}</p>
        </motion.div>
    );
};

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My skills</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
                {technologies.map((technology, index) => (
                    <TechCard key={technology.name} index={index} {...technology} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "skills");
