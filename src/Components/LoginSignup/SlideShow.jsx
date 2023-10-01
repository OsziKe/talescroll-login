import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'; // Importuj bibliotekę do animacji typewrite
import pic1 from '../Assets/0 - The painting shows a cozy literary caf with sh.png';
import pic2 from '../Assets/1 - The painting shows a cozy literary caf with sh.png';
import pic3 from '../Assets/2 - The painting shows a cozy literary caf with sh.png';
import pic4 from '../Assets/3 - The painting shows a cozy literary caf with sh.png';
import './SlideShow.css'; // Zaimportuj swoje style CSS

const images = [pic1, pic2, pic3, pic4];

const textData = [
    [
        "Zarejestruj się,",
        "aby Nie",
        "Przegapić",
        "Okazji!",
    ],
    [
        "Znajdź swój",
        "ulubiony",
        "świat",
        "w książkach!",
    ],
    [
        "Rozpocznij swoją",
        "książkową",
        "podróż!",
    ],
    [
        "Dołącz",
        "do naszej",
        "społeczności",
        "czytelników!",
    ],
];

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentChar < textData[currentSlide][currentLine].length) {
                setCurrentChar((prevChar) => prevChar + 1);
            } else if (currentLine < textData[currentSlide].length - 1) {
                setCurrentChar(0);
                setCurrentLine((prevLine) => prevLine + 1);
            } else {
                setCurrentChar(0);
                setCurrentLine(0);
                setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
            }
        }, 100); // Szybkość pisania (zmniejsz do uzyskania szybszego efektu)

        return () => clearInterval(interval);
    }, [currentSlide, currentLine, currentChar]);

    const currentText = textData[currentSlide][currentLine].slice(0, currentChar);

    return (
        <div className="slide-show">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="text-overlay">
                <div className="text-center">
                    <h2>{currentText}</h2>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
