import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import LandingMask from '../../img/LandingCarouselImages/LandingMask.jpg';
import LandingMask2 from '../../img/LandingCarouselImages/LandingMask2.jpg';
import Phone_LandingMask2 from '../../img/LandingCarouselImages/Phone_LandingMask2.jpg';
import LandingMask3 from '../../img/LandingCarouselImages/LandingMask3.jpg';

function SelectionHero() {
    const navMediaQuery = useMediaQuery('(min-width:530px)');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const renderCarouselItem = (index, desktop_img, phone_img) => {
        let bg_img = navMediaQuery ? desktop_img : phone_img;
        return (
            <Carousel.Item
                className={`carousel-image-${index}`}
                style={{
                    minHeight: 450,
                    background: `url(${bg_img}) center / auto 100% no-repeat`,
                    // backgroundSize: 'auto 100%',
                }}
            ></Carousel.Item>
        );
    };

    return (
        <Carousel
            autoplay="false"
            pause={false}
            active={index}
            onSelect={handleSelect}
        >
            {renderCarouselItem(1, LandingMask, LandingMask)}
            {renderCarouselItem(2, LandingMask2, Phone_LandingMask2)}
            {renderCarouselItem(3, LandingMask3, LandingMask3)}
        </Carousel>
    );
}

export default SelectionHero;
