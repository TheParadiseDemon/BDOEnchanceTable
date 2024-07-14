import React, { useState, useEffect } from 'react';

// Массив с данными изображений (URL изображений)
const images = [
    'images/Kaiv.png',
    'images/Boots.png',
    'images/kibelius.png',
    'images/Helmet.png',
];

const Slides = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Функция для переключения на следующее изображение
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Функция для переключения на предыдущее изображение
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Автоматическое переключение через каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // Интервал в миллисекундах (5 секунд)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <button onClick={prevImage}>Предыдущее</button>
            <img src={images[currentImageIndex]}
                 alt={`Image ${currentImageIndex}`}
                 style={{
                     width:'300px',
                     height:'300px',
                     objectFit:'cover',
            }}
            />
            <button onClick={nextImage}>Следующее</button>
        </div>
    );
};

export default Slides;