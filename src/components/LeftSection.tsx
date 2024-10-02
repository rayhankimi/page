import React from 'react';
import './styles/LeftSection.css';
import squareImage from '../assets/aaa.jpg';

const LeftSection: React.FC = () => {
    return (
        <div className="left-section">
            <img src={squareImage} alt="Gambar Kotak" className="square-image" />
        </div>
    );
};

export default LeftSection;
