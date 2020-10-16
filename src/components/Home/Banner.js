import React from 'react';
import frame from '../../images/logos/Frame.png'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-main">
<                   div className="banner__text">
                        <h2>Let’s Grow Your Brand To The Next Level</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                        <button className="common-btn">Hire Us</button>
                    </div>
                    <div className="banner__img">
                        <img src={frame} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;