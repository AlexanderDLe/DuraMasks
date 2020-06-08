import React, { useState, useMemo } from 'react';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function SelectionHero({ webp }) {
    const navMediaQuery = useMediaQuery('(min-width:900px)');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    console.log(webp);

    const selectionImage = useMemo(() => {
        let webpDir = webp ? 'webp/' : '';
        let format = webp ? 'webp' : 'jpg';

        return {
            dotted: navMediaQuery
                ? require(`../../img/${webpDir}SelectionCarouselImages/Desktop_Dotted.${format}`)
                : require(`../../img/${webpDir}SelectionCarouselImages/Phone_Dotted.${format}`),

            hawaiian: navMediaQuery
                ? require(`../../img/${webpDir}SelectionCarouselImages/Desktop_Hawaiian.${format}`)
                : require(`../../img/${webpDir}SelectionCarouselImages/Phone_Hawaiian.${format}`),

            bandana: navMediaQuery
                ? require(`../../img/${webpDir}SelectionCarouselImages/Desktop_Bandana.${format}`)
                : require(`../../img/${webpDir}SelectionCarouselImages/Phone_Bandana.${format}`),
            patriot: navMediaQuery
                ? require(`../../img/${webpDir}SelectionCarouselImages/Desktop_Patriot.${format}`)
                : require(`../../img/${webpDir}SelectionCarouselImages/Phone_Patriot.${format}`),
        };
    }, [navMediaQuery, webp]);

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
