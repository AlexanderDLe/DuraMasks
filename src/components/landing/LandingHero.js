import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import LandingMask from '../../img/LandingCarouselImages/LandingMask.jpg';
import LandingMask4 from '../../img/LandingCarouselImages/LandingMask4.jpg';
import Phone_LandingMask4 from '../../img/LandingCarouselImages/Phone_LandingMask4.jpg';
import LandingMask3 from '../../img/LandingCarouselImages/LandingMask3.jpg';
import Desktop_Patriot from '../../img/SelectionCarouselImages/Desktop_Patriot.jpg';
import Phone_Patriot from '../../img/SelectionCarouselImages/Phone_Patriot.jpg';

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
                style={{
                    minHeight: 450,
                    background: `url(${bg_img}) center / auto 100% no-repeat`,
                    backgroundSize: 'cover',
                    // backgroundSize: 'auto 100%',
                    // backgroundColor: 'red',
                }}
                className={`carousel-image-${index}`}
            ></Carousel.Item>
        );
    };

    return (
        <Carousel pause={false} active={index} onSelect={handleSelect}>
            {renderCarouselItem(1, Desktop_Patriot, Phone_Patriot)}
            {renderCarouselItem(1, LandingMask, LandingMask)}
            {renderCarouselItem(2, LandingMask3, LandingMask3)}
            {renderCarouselItem(3, LandingMask4, Phone_LandingMask4)}
        </Carousel>
    );
}

export default SelectionHero;
