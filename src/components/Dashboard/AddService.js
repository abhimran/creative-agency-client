import React from 'react';
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'


const AddService = () => {
    const alert = useAlert()
    const { register, handleSubmit, errors, reset  } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', data.file[0]);
        formData.append('serviceName', data.serviceName);
        formData.append('serviceDetail', data.serviceDetail);
       fetch('http://localhost:5000/addservice', {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert.show('Service Added Successfully!')
                reset()
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="dashboard__order">
            <div className="dashboard__order-heading">
                <h3>Order</h3>
            </div>
            <div className="dashboard__order-main">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" placeholder="Service Name" className="form-control" />
                        {errors.serviceName && <span className="text-danger">Service Title is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceDetail" placeholder="Service Detail" className="form-control" />
                        {errors.serviceDetail && <span className="text-danger">Service Description is required</span>}
                    </div>
                    <div className="form-group">
                         <input ref={register({ required: true })} className="form-control" name="file" type="file" />
                        {errors.file && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="common-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;