import React from 'react';
import './styles/CustomCard.css'; // Import CSS file for styles

interface CustomCardProps {
    title: string;
    text: string[];
    transparent?: boolean;
    emoji: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, text, transparent = false , emoji}) => {
    return (
        <div className={`card ${transparent ? 'card-no-bg' : ''}`}>
            <div className="card-content">
                <div className="text-content">
                    <h2 className="card-title">{title}</h2>
                    {text.map((paragraph, index) => (
                        <p key={index} className="card-text">{paragraph}</p>
                    ))}
                </div>
                <div className="sun-icon">
                    {emoji}
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
