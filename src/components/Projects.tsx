import React from 'react';
import './styles/Projects.css';

interface ProjectList {
    message: string;
    techStack: string;
    emoji: string;
}

interface LatestRequestsProps {
    projects: ProjectList[];
}

const Projects: React.FC<LatestRequestsProps> = ({ projects }) => {
    return (
        <div className="competencies">
            <h2 className="title">LATEST PROJECTS</h2>
            <div className="skill-list">
                {projects.map((skills, index) => (
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

export default Projects;
