import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="service__card">
            <img src={`data:image/png;base64,${service.image.img}`} alt=""/>
            <h3>{service.serviceName}</h3>
            <p>{service.serviceDetail}</p>
        </div>
    );
};

export default ServiceDetail;