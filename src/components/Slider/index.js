import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { bgcolor } from "@mui/system";

export default function FeatSlider({ images }) {
    console.log(images);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <Slider {...settings} style={{ marginBottom: 15 }}>
            {images.map((image) => (
                <div>
                    <img src={image} alt="" style={{ height: 175, width: 350}}/>
                </div>
            ))}
        </Slider>
    )
};