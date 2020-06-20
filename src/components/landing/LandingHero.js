import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        padding: 8,
        zIndex: '100',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
    },
});
function SelectionHero() {
    const navMediaQuery = useMediaQuery('(min-width:900px)');
    const navMediaQuery535 = useMediaQuery('(min-width:535px)');
    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const landingImage = useMemo(() => {
        return navMediaQuery535
            ? {
                  img1: require(`../../img/LandingPhotos/LandingPhoto.jpg`),
              }
            : {
                  img1: require(`../../img/LandingPhotos/LandingPhoto.jpg`),
              };
    }, [navMediaQuery535]);

    const renderCarouselItem = (index, bg_img) => {
        return (
            <Carousel.Item
                style={{
                    minHeight: navMediaQuery ? '50vh' : 300,
                    background: `#f2b51f url(${bg_img}) center / auto 100% no-repeat`,
                }}
                className={`carousel-item carousel-image-${index}`}
            ></Carousel.Item>
        );
    };

    return (
        <div className={classes.root}>
            {/* <div style={landingBG}></div> */}
            <Carousel pause={false} active={index} onSelect={handleSelect}>
                {renderCarouselItem(1, landingImage.img1)}
                {/* {renderCarouselItem(2, landingImage.img2)} */}
            </Carousel>
        </div>
    );
}

export default SelectionHero;
