import React, { useState, useMemo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function SelectionHero() {
    const navMediaQuery = useMediaQuery('(min-width:530px)');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const landingImage = useMemo(() => {
        return {
            elizabro: navMediaQuery
                ? require('../../img/LandingCarouselImages/LandingMask.jpg')
                : require('../../img/LandingCarouselImages/Phone_LandingMask.jpg'),
            hispanic: navMediaQuery
                ? require('../../img/LandingCarouselImages/LandingMask2.jpg')
                : require('../../img/LandingCarouselImages/Phone_LandingMask2.jpg'),
            caucasian: navMediaQuery
                ? require('../../img/LandingCarouselImages/LandingMask3.jpg')
                : require('../../img/LandingCarouselImages/Phone_LandingMask3.jpg'),
        };
    }, [navMediaQuery]);

    const renderCarouselItem = (index, bg_img) => {
        return (
            <Carousel.Item
                style={{
                    minHeight: 450,
                    background: `url(${bg_img}) center / auto 100% no-repeat`,
                }}
                className={`landing-carousel-item carousel-image-${index}`}
            ></Carousel.Item>
        );
    };

    return (
        <Carousel pause={false} active={index} onSelect={handleSelect}>
            {renderCarouselItem(1, landingImage.elizabro)}
            {renderCarouselItem(2, landingImage.hispanic)}
            {renderCarouselItem(3, landingImage.caucasian)}
        </Carousel>
    );
}

export default SelectionHero;
