import React from 'react';
import './styles/RightSection.css';
import logo from '../assets/logo.png';
import CustomCard from "./CustomCard.tsx";
import Projects from "./Projects.tsx";
import RequestForm from "./RequestForm.tsx";

const RightSection: React.FC = () => {
    const skillList = [
        { message: "Traffic Detection Machine Learning Model", techStack: "Raspberry Pi, PyTorch", emoji: "🚀" },
        { message: "Traffic Detection API & Dashboard", techStack: "Django REST, React", emoji: "🚀" },
        { message: "Traffic Detection Prototype Using Light-Dependent Resistor", techStack: "ESP32 with Arduino Library, Firebase", emoji: "🚀" },
        { message: "Load-cell related projects", techStack: "C, STM32CubeMX, PCB Designing", emoji: "🚀" },
        { message: "Customizable personal IoT API & Library for the microcontrollers", techStack: "Django REST, C", emoji: "🚀" },
        { message: "This Page", techStack: "React", emoji: "🚀" },
    ]

    return (
        <div className="right-section">
            <CustomCard
                title={"About Me"}
                text={["My name is Rayhan Kimi. You can call me Rayhan. Currently, i study at Udayana University as Electrical Engineering student. ",
                    "My main field of interest is Internet of Things Development. I prefer to use ESP32 and STM boards for my projects.",]}
                transparent={false}
                emoji={"☀️"}/>
            <CustomCard
                title={"Current State"}
                text={["I'm currently working on my final year projects and studying to build some API for my IoT projects.",
                    "With solid knowledge on Arduino library and some Python programming, i also currently learning STM32CubeMX and ESP-IDF frameworks to improve my skills in Firmware Engineering fields."]}
                transparent={true}
                emoji={""}/>
            <Projects projects={skillList} />
            <RequestForm />
            <img src={logo} alt="logo" className="logo-image"/>
        </div>
    );
};

export default RightSection;
