import React from 'react';

const ServicelistDetail = ({item}) => {
    return (
       <div className="admin_servicelist-item">
           <p>{item.name}</p>
           <p>{item.email}</p>
           <p>{item.serviceName}</p>
           <p>{item.serviceDetail}</p>
           <p>{item.status}</p>
       </div>
    );
};

export default ServicelistDetail;