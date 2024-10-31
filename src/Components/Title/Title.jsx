import React from 'react';
import './Title.css';
import './TitleResponsive.css'

const Title = ({Title, subTitle}) => {
    return (
        <div className='container title-section'>
            <h2 data-aos="fade-left">{Title}</h2>
            <p data-aos="fade-right">{subTitle}</p>
        </div>
    );
};

export default Title;