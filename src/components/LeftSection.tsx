import React, { useState, useEffect } from 'react';
import './styles/LeftSection.css';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const images = [image1, image2, image3, image4];

const LeftSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Fungsi untuk mengganti ke gambar berikutnya dengan animasi fade
    const nextImage = () => {
        setFade(false); // Mulai fade out
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true); // Mulai fade in
        }, 500); // Durasi fade out (sesuaikan dengan CSS)
    };

    // Mengatur timer untuk mengganti gambar setiap 3 detik
    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 3000);

        // Membersihkan timer ketika komponen unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="left-section">
            <img
                src={images[currentImageIndex]}
                alt={`Gambar ${currentImageIndex + 1}`}
                className={`square-image ${fade ? 'fade-in' : 'fade-out'}`}
                onClick={nextImage}
            />
        </div>
    );
};

export default LeftSection;
