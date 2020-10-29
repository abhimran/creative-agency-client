import React from 'react';
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'

const Review = () => {
    const alert = useAlert()
    const { register, handleSubmit, errors, reset  } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', data.file[0]);
        formData.append('name', data.name);
        formData.append('designation', data.designation);
        formData.append('description', data.description);
       fetch('https://tranquil-spire-26081.herokuapp.com/addreview', {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert.show('Review Added Successfully!')
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
                <h3>Review</h3>
            </div>
            <div className="dashboard__order-main">
                <form className="p-md-5 p-sm-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">Name is required</span>}

                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="designation" placeholder="Company's Name Designation" className="form-control" />
                        {errors.designation && <span className="text-danger">Designation is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" />
                        {errors.description && <span className="text-danger">Description is required</span>}
                    </div>

                    <div className="form-group">
                         <input ref={register({ required: true })} className="form-control" name="file" type="file" />
                        {errors.file && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="common-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;