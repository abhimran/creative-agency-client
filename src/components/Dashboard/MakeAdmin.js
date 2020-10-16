import React from 'react';
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'


const MakeAdmin = () => {
    const alert = useAlert()
    const { register, handleSubmit, errors, reset  } = useForm();
     const onSubmit = data => {
         fetch('http://localhost:5000/makeadmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert.show('Admin Added Successfully!')
                reset()
            }
        })
        .catch(err=>{
            console.log(err);
        })
     }
    return (
        <div className="make_admin">
            <div className="make_admin-header">
                <h3>Add a Admin</h3>
            </div>
            <div className="make_admin-main">
                 <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Email Address" className="form-control" />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="common-btn">Submit</button>
                    </div>
                 </form>
            </div>
        </div>
    );
};

export default MakeAdmin;