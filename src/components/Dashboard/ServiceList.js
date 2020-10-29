import React, { useEffect, useState} from 'react';
import ServicelistDetail from './ServicelistDetail';

const ServiceList = () => {
    const [servicelist, setServicelist] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-spire-26081.herokuapp.com/orders')
        .then(res=> res.json())
        .then(result=> setServicelist(result))
    }, [])

    return (
        <div className="admin_servicelist">
            <div className="admin_servicelist-header">
                <h3>Services List</h3>
            </div>
            <div className="admin_servicelist-main">
                <div className="admin_servicelist-head">
                    <h5>Name</h5>
                    <h5>Email Id</h5>
                    <h5>Service</h5>
                    <h5>Project Detail</h5>
                    <h5>Status</h5>
                </div>
                <div className="admin_servicelist-detail">
                    {
                        servicelist.map(item=> <ServicelistDetail key={item._id} item={item}></ServicelistDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;