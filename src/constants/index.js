import {
    Code,
    Database,
    Layout,
    Server,
    Smartphone,
    Globe,
    Cpu,
    Layers,
    Palette,
    Video,
    MonitorPlay,
} from "lucide-react";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: Layout,
    },
    {
        title: "Frontend Developer",
        icon: Code,
    },
    {
        title: "Backend Developer",
        icon: Server,
    },
    {
        title: "Graphic Designer",
        icon: Palette,
    },
    {
        title: "Video Editor",
        icon: Video,
    },
    {
        title: "Motion Graphics",
        icon: MonitorPlay,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: Code,
    },
    {
        name: "CSS 3",
        icon: Layers,
    },
    {
        name: "JavaScript",
        icon: Code,
    },
    {
        name: "TypeScript",
        icon: Code,
    },
    {
        name: "React JS",
        icon: Code,
    },
    {
        name: "Tailwind CSS",
        icon: Layout,
    },
    {
        name: "Node JS",
        icon: Server,
    },
    {
        name: "PHP",
        icon: Server,
    },
    {
        name: "MySQL",
        icon: Database,
    },
    {
        name: "SQL",
        icon: Database,
    },
    {
        name: "MongoDB",
        icon: Database,
    },
    {
        name: "git",
        icon: Code,
    },
    {
        name: "figma",
        icon: Layout,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Freelance",
        icon: Globe,
        iconBg: "#383E56",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "E-Learning Platform",
        description:
            "A comprehensive mobile application built with Flutter that allows users to access courses, track progress, and interact with instructors.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "Nodejs",
                color: "green-text-gradient",
            },
            {
                name: "dart",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/1e1e1e/FFF?text=E-Learning",
        source_code_link: "https://github.com/MustafaAbdiHaashi/E-learning-App",
    },
    {
        name: "Pharmacy Management",
        description:
            "Web system that enables pharmacies to manage inventory, track sales, and handle prescriptions effectively using PHP and MySQL.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/1e1e1e/FFF?text=Pharmacy+System",
        source_code_link: "https://github.com/MustafaAbdiHaashi/Pharmacy_system",
    },
    {
        name: "POS System",
        description:
            "A comprehensive Point of Sale system designed to manage sales, inventory, and detailed reporting with a user-friendly interface.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Nodejs",
                color: "green-text-gradient",
            },
            {
                name: "JWt",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/1e1e1e/FFF?text=POS+System",
        source_code_link: "https://github.com/MustafaAbdiHaashi/Pos-System",
    },
    {
        name: "Weather App",
        description:
            "A sleek and responsive weather application that provides real-time weather data and forecasts using vanilla JavaScript and weather APIs.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/1e1e1e/FFF?text=Weather+App",
        source_code_link: "https://github.com/MustafaAbdiHaashi/Weather-App",
    },
];

export { services, technologies, experiences, projects };
