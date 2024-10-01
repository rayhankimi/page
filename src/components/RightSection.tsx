import React from 'react';
import './RightSection.css';
import SunshineCard from "./SunshineCard.tsx";
import DefaultCard from "./DefaultCard.tsx";

const RightSection: React.FC = () => {
    return (
        <div className="right-section">
            <div className="content">
                <SunshineCard />
                <DefaultCard />
                {/* Filler */}
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i}>Lorem ipsum dolor sit amet... {i + 1}</p>
                ))}
            </div>
        </div>
    );
};

export default RightSection;
