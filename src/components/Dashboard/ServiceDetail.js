import React from 'react';

const ServiceDetail = ({order}) => {
    return (
        <div className="dashboard__service-card">
            <div className="dashboard__service-card-header">
                 <img src={`data:image/png;base64,${order.image.img}`} alt=""/>
                 <button className="btn btn-danger btn-custom">{order.status}</button>
            </div>
            <div className="dashboard__service-card-description">
                <h3>{order.serviceName}</h3>
                <p>{order.serviceDetail}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;