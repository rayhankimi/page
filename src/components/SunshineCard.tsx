import React from 'react';
import './SunshineCard.css'; // Import CSS file for styles

const SunshineCard: React.FC = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="text-content">
                    <h2 className="card-title"> Lorem ipsum under construction sit amet</h2>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc
                    </p>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc
                    </p>
                </div>
                <div className="sun-icon">
                    ☀️ {/* Simple text representation of sun */}
                </div>
            </div>
        </div>
    );
};

export default SunshineCard;