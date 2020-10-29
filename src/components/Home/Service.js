import React from 'react';
import ServiceDetail from './ServiceDetail';
import { useState } from 'react';
import { useEffect } from 'react';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-spire-26081.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    }, [])
    
    return (
        <section className="service" id="service">
            <div className="container">
                <div className="service__header">
                    <h3>Provide awesome <span>services</span></h3>
                </div>
                <div className="service__main">
                    {
                        services.map(item=><ServiceDetail key={item._id} service={item}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;