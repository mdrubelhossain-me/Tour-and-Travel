import React, { useState } from 'react';
import './Hero.css';
import './HeroResponsive.css';
import video from '../../assets/video.mp4';

const Hero = () => {
    const [price, setPrice] = useState(5000); // Initialize with a default price

    const handleRangeChange = (event) => {
        setPrice(Number(event.target.value));
    };

    const incrementPrice = () => {
        if (price < 5000) {
            setPrice(prevPrice => prevPrice + 100);
        }
    };

    const decrementPrice = () => {
        if (price > 1000) {
            setPrice(prevPrice => prevPrice - 100);
        }
    };

    return (
        <div className='hero-section'>
            <div className="over-lay"></div>
            <video src={video} autoPlay loop muted type="video/mp4"></video>
            <div className="content">
                <div className="container">
                    <h5>Our Packages</h5>
                    <h1>Search Your Holiday <i className="bi bi-search"></i></h1>
                    <div className="search-area overflow-hidden">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="destination" className="form-label">Search Your Destination</label>
                                        <div className='inputField'>
                                            <input type="text" className="form-control" placeholder="Search Your Destination" />
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Search Your Date</label>
                                        <div className='inputField'>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="mb-3">
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="price" className="form-label">Price:</label>
                                            <h6>${price}</h6>
                                        </div>
                                        <div className='inputField'>
                                            <input
                                                type="range"
                                                max={5000}
                                                min={1000}
                                                value={price}
                                                className="form-range"
                                                id="price-range"
                                                onChange={handleRangeChange}
                                            />
                                        </div>
                                        {/* <div className='d-flex justify-content-between mt-2'>
                                            <button type="button" onClick={decrementPrice} disabled={price <= 1000}>-</button>
                                            <button type="button" onClick={incrementPrice} disabled={price >= 5000}>+</button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 d-flex justify-content-end m-auto btn-area">
                                    <button type='submit' className='myBtn'><i class="bi bi-funnel-fill"></i> More Filters</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
