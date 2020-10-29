import React from 'react';
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'
const Order = () => {
    const alert = useAlert()
    const { register, handleSubmit, errors, reset  } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', data.file[0]);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('serviceName', data.serviceName);
        formData.append('serviceDetail', data.serviceDetail);
        formData.append('price', data.price);
        formData.append('status', data.status = 'pending');
       fetch('https://tranquil-spire-26081.herokuapp.com/addorder', {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert.show('Order Placed Successfully!')
                reset()
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="dashboard__order">
            <div className="dashboard__order-heading mb-3">
                <h3>Order</h3>
            </div>
            <div className="dashboard__order-main">
                <form className="p-md-5 p-sm-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Company Name" className="form-control" />
                        {errors.name && <span className="text-danger">Name is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" placeholder="Service Name" className="form-control" />
                        {errors.serviceName && <span className="text-danger">Service Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceDetail" placeholder="Service Detail" className="form-control" />
                        {errors.serviceDetail && <span className="text-danger">Service Detail is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 mb-3">
                            <input ref={register({ required: true })} className="form-control" name="price" placeholder="Price" type="number" />
                            {errors.price && <span className="text-danger">Price is required</span>}
                        </div>
                        <div className="col-md-4">
                            <input ref={register({ required: true })} className="form-control" name="file" type="file" />
                            {errors.file && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="common-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;