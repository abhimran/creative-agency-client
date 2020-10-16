import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../images/carousel-1.png'
import img2 from '../../images/carousel-2.png'
import img3 from '../../images/carousel-4.png'
import img4 from '../../images/carousel-5.png'
import WorkDetail from './WorkDetail';
 
const Work = () => {
    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
            responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                
            }
        }

  ]
    }
    const [settings] = useState(config);

     const products = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img3,
    }
  ]
    return (
       <section className = "work" id="work">
           <div className="container">
                <div className="work__header">
                    <h3>Here are some of <span>our works</span></h3>
                </div>
                <div className="work__slider">
                    <Slider {...settings}>
                        {
                            products.map((item,i)=><WorkDetail key={i} item={item}></WorkDetail>)
                        }
                    </Slider>
                </div>
           </div>
       </section>
    );
};

export default Work;