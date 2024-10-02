import React from 'react';
import './styles/RightSection.css';
import CustomCard from "./CustomCard.tsx";
import Skill from "./Skill.tsx";
import RequestForm from "./RequestForm.tsx";

const RightSection: React.FC = () => {
    const skillList = [
        { message: "Lorem ipsum dolor sit amet", techStack: "React, TypeScript", emoji: "🚀" },
        { message: "Lorem ipsum dolor sit amet", techStack: "React, TypeScript", emoji: "🚀" },
        { message: "Lorem ipsum dolor sit amet", techStack: "React, TypeScript", emoji: "🚀" },
        { message: "Lorem ipsum dolor sit amet", techStack: "React, TypeScript", emoji: "🚀" },
        { message: "Lorem ipsum dolor sit amet", techStack: "React, TypeScript", emoji: "🚀" },
    ]

    return (
        <div className="right-section">
            <CustomCard
                title={"Lorem Ipsum Under Construction Sit Amet"}
                text={["lorem ipsum sit", "lorem ipsum sit dolor amet"]}
                transparent={false}
                emoji={"☀️"}/>
            <CustomCard
                title={"Lorem Ipsum Under Construction Sit Amet"}
                text={["lorem ipsum sit", "lorem ipsum sit dolor amet"]}
                transparent={true}
                emoji={"☀️"}/>
            <Skill skills={skillList} />
            <RequestForm />
            <div className="content">
                {/* Filler */}
                {Array.from({length: 50}, (_, i) => (
                    <p key={i}>Lorem ipsum dolor sit amet... {i + 1}</p>
                ))}
            </div>
        </div>
    );
};

export default RightSection;
