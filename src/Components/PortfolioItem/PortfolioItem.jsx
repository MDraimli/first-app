import React from 'react';

const PortfolioItem = ({ src, alt, onClick }) => {
    const img = new URL(src, import.meta.url).href

    console.log(img);
    return (
        <div className='portfolio-item' onClick={onClick}>
            <img src={img} alt={alt} className='w-100 rounded-3' />
            <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
        </div>
    );
};

export default PortfolioItem;