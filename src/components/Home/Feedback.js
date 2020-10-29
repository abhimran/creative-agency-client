import React, { useEffect, useState } from 'react';
import FeedbackDetail from './FeedbackDetail';

const Feedback = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-spire-26081.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    }, [])
    
    return (
       <section className="service">
            <div className="container">
                <div className="service__header">
                    <h3>Clients <span>feedback</span></h3>
                </div>
                <div className="service__main">
                    {
                        reviews.map(item=><FeedbackDetail key={item._id} feedback={item}></FeedbackDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;