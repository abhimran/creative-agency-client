import React from 'react';
import airbnb from '../../images/logos/airbnb.png'
import google from '../../images/logos/google.png'
import netflix from '../../images/logos/netflix.png'
import slack from '../../images/logos/slack.png'
import uber from '../../images/logos/uber.png'

const Sponsor = () => {
    return (
        <section className="sponsor">
            <div className="container">
                <div className="sponsor_org">
                    <img src={airbnb} alt=""/>
                    <img src={google} alt=""/>
                    <img src={netflix} alt=""/>
                    <img src={slack} alt=""/>
                    <img src={uber} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;