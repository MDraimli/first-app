import React, { useState } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import './Portfolio.css';

export const Portfolio = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');
    const images = [
        { id: 1, src: '../../assets/imgs/portfolio-1.png', alt: 'Portfolio 1' },
        { id: 2, src: '../../assets/imgs/portfolio-2.png', alt: 'Portfolio 2' },
        { id: 3, src: '../../assets/imgs/portfolio-3.png', alt: 'Portfolio 3' },
        { id: 4, src: '../../assets/imgs/portfolio-1.png', alt: 'Portfolio 4' },
        { id: 5, src: '../../assets/imgs/portfolio-2.png', alt: 'Portfolio 5' },
        { id: 6, src: '../../assets/imgs/portfolio-3.png', alt: 'Portfolio 6' },
    ];

    const showModal = (src) => {
        const img = new URL(src, import.meta.url).href
        setModalImageSrc(img);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
        setModalImageSrc('');
    };

    return (
        <>
            <div className='main-container justify-start bg-white'>
                <div className="text-center pt-4 heading">
                    <h2 className="uppercase mb-3 text-4xl font-bold">portfolio component</h2>
                    <div className="flex items-center justify-center mb-3">
                        <div className="line me-3"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3"></div>
                    </div>
                </div>
                <div className='custom-width grid grid-cols-3 gap-3'>
                    {images.map((image) => (
                        <PortfolioItem key={image.id} src={image.src} alt={image.alt} onClick={() => showModal(image.src)} />
                    ))}
                </div>
            </div>

            <div className={`modal ${isModalVisible ? '' : 'hidden'}`} id="showImgHolder" onClick={hideModal}>
                <img src={modalImageSrc} alt="" />
            </div>
        </>
    );
};

