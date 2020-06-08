import React, { useState, useMemo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function SelectionHero({ webp }) {
    const navMediaQuery = useMediaQuery('(min-width:535px)');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    console.log(webp);
    const landingImage = useMemo(() => {
        let webpDir = webp ? 'webp/' : '';
        let format = webp ? 'webp' : 'jpg';

        return {
            elizabro: navMediaQuery
                ? require(`../../img/${webpDir}LandingCarouselImages/LandingMask.${format}`)
                : require(`../../img/${webpDir}LandingCarouselImages/Phone_LandingMask.${format}`),
            hispanic: navMediaQuery
                ? require(`../../img/${webpDir}LandingCarouselImages/LandingMask2.${format}`)
                : require(`../../img/${webpDir}LandingCarouselImages/Phone_LandingMask2.${format}`),
            caucasian: navMediaQuery
                ? require(`../../img/${webpDir}LandingCarouselImages/LandingMask3.${format}`)
                : require(`../../img/${webpDir}LandingCarouselImages/Phone_LandingMask3.${format}`),
        };
    }, [navMediaQuery, webp]);

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
