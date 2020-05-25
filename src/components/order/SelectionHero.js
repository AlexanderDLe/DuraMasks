import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import Phone_Dotted from '../../img/SelectionCarouselImages/Phone_Dotted.jpg';
import Desktop_Dotted from '../../img/SelectionCarouselImages/Desktop_Dotted.jpg';
import Phone_Hawaiian from '../../img/SelectionCarouselImages/Phone_Hawaiian.jpg';
import Desktop_Hawaiian from '../../img/SelectionCarouselImages/Desktop_Hawaiian.jpg';
import Desktop_Bandana from '../../img/SelectionCarouselImages/Desktop_Bandana.jpg';
import Phone_Bandana from '../../img/SelectionCarouselImages/Phone_Bandana.jpg';
import Desktop_Patriot from '../../img/SelectionCarouselImages/Desktop_Patriot.jpg';
import Phone_Patriot from '../../img/SelectionCarouselImages/Phone_Patriot.jpg';

function SelectionHero() {
    const navMediaQuery = useMediaQuery('(min-width:900px)');
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
                    background: `url(${bg_img}) no-repeat center`,
                    backgroundSize: 'cover',
                }}
                className={`carousel-item carousel-image-${index}`}
            ></Carousel.Item>
        );
    };

    return (
        <Carousel pause={false} active={index} onSelect={handleSelect}>
            {renderCarouselItem(1, Desktop_Patriot, Phone_Patriot)}
            {renderCarouselItem(2, Desktop_Dotted, Phone_Dotted)}
            {renderCarouselItem(3, Desktop_Bandana, Phone_Bandana)}
            {renderCarouselItem(4, Desktop_Hawaiian, Phone_Hawaiian)}
        </Carousel>
    );
}

export default SelectionHero;
