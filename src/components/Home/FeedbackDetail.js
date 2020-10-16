import React from 'react';

const FeedbackDetail = ({feedback}) => {
    return (
        <div className="feedback-card">
            <div className="feedback-card__header">
                <img src={`data:image/png;base64,${feedback.image.img}`} alt=""/>
                <div className="feedback-card_ND">
                    <h4>{feedback.name}</h4>
                    <h5>{feedback.designation}</h5>
                </div>
            </div>
            <div className="feedback-card__body">
                <p>{feedback.description}</p>
            </div>
        </div>
    );
};

export default FeedbackDetail;