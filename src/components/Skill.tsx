import React from 'react';
import './styles/Skill.css';

interface SkillList {
    message: string;
    techStack: string;
    emoji: string;
}

interface LatestRequestsProps {
    skills: SkillList[];
}

const Skill: React.FC<LatestRequestsProps> = ({ skills }) => {
    return (
        <div className="competencies">
            <h2 className="title">LATEST REQUESTS</h2>
            <div className="skill-list">
                {skills.map((skills, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-message">{skills.message}</div>
                        <div className="skill-details">
                            <span className="skill-techstack">{skills.techStack}</span>
                            <span className="skill-emoji">{skills.emoji}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
