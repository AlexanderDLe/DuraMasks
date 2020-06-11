import React, { useState, useMemo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function SelectionHero() {
    const navMediaQuery = useMediaQuery('(min-width:900px)');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const selectionImage = useMemo(() => {
        return {
            dotted: navMediaQuery
                ? require(`../../img/SelectionCarouselImages/Desktop_Dotted.jpg`)
                : require(`../../img/SelectionCarouselImages/Phone_Dotted.jpg`),

            hawaiian: navMediaQuery
                ? require(`../../img/SelectionCarouselImages/Desktop_Hawaiian.jpg`)
                : require(`../../img/SelectionCarouselImages/Phone_Hawaiian.jpg`),

            bandana: navMediaQuery
                ? require(`../../img/SelectionCarouselImages/Desktop_Bandana.jpg`)
                : require(`../../img/SelectionCarouselImages/Phone_Bandana.jpg`),
            patriot: navMediaQuery
                ? require(`../../img/SelectionCarouselImages/Desktop_Patriot.jpg`)
                : require(`../../img/SelectionCarouselImages/Phone_Patriot.jpg`),
        };
    }, [navMediaQuery]);

    const renderCarouselItem = (index, bg_img) => {
        return (
            <Carousel.Item
                style={{
                    minHeight: 450,
                    background: `url(${bg_img}) no-repeat center`,
                }}
                className={`carousel-item carousel-image-${index}`}
            ></Carousel.Item>
        );
    };

    return (
        <Carousel pause={false} active={index} onSelect={handleSelect}>
            {renderCarouselItem(1, selectionImage.dotted)}
            {renderCarouselItem(2, selectionImage.hawaiian)}
            {renderCarouselItem(3, selectionImage.bandana)}
            {renderCarouselItem(4, selectionImage.patriot)}
        </Carousel>
    );
}

export default SelectionHero;
