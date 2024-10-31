import React from 'react';
import './Title.css';
import './TitleResponsive.css'

const Title = ({Title, subTitle}) => {
    return (
        <div className='container title-section'>
            <h2>{Title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default Title;