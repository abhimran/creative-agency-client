import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';

const Service = () => {
     const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-spire-26081.herokuapp.com/orders')
        .then(res=> res.json())
        .then(result=> setOrders(result))
    }, [])
    return (
        <div className="dashboard__service">
            <div className="dashboard__service-heading">
                <h3>Service List</h3>
            </div>
            <div className="dashboard__service-main">
                {
                    orders.map(item=><ServiceDetail key={item._id} order={item}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default Service;