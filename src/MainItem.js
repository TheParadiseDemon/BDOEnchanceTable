import React, { useState } from 'react';

const MainItem = ({ imageSrc, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imageStyle = {
        transform: isHovered ? 'scale(1.4)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: isHovered ? 1 : 0,
    };

    const containerStyle = {
        overflow: 'visible',
    };

    return (
        <div className="main-item" style={containerStyle}>
            <div className="main-item-image"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <img src={imageSrc} alt={title} style={imageStyle} />
            </div>
            <div className="main-item-title">
                {title}
            </div>
            <div className="main-item-article">
                {description}
            </div>
        </div>
    );
};

export default MainItem;