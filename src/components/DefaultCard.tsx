import React from 'react';
import './DefaultCard.css'; // Import CSS file for styles

const DefaultCard: React.FC = () => {
    return (
        <div className="card-no-bg">
            <div className="card-content-no-bg">
                <div className="text-content-no-bg">
                    <h2 className="card-title-no-bg"> Lorem ipsum under construction sit amet</h2>
                    <p className="card-text-no-bg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunce
                    </p>
                    <p className="card-text-no-bg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc
                    </p>
                </div>
                <div className="sun-icon-no-bg">
                    ☀️ {/* Simple text representation of sun */}
                </div>
            </div>
        </div>
    );
};

export default DefaultCard;
