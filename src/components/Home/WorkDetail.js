import React from 'react';

const WorkDetail = ({item}) => {
    return (
        <div className="work__card">
            <img className="work__card_img" src={item.img} alt=""/>
      </div>
    );
};

export default WorkDetail;