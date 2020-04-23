import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    // DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Carousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={25}
            totalSlides={3}
            style={{ textAlign: 'center' }}
            interval={8000}
            isPlaying={true}
        >
            <Slider>
                <Slide className="slide" index={0}>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        "The masks created here are very comfortable and fit
                        nicely."
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        - Elizabeth La
                    </Typography>
                </Slide>
                <Slide className="slide" index={1}>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        "The masks created here are very comfortable and fit
                        nicely."
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        - Elizabeth La
                    </Typography>
                </Slide>
                <Slide className="slide" index={1}>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        "The masks created here are very comfortable and fit
                        nicely."
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        - Elizabeth La
                    </Typography>
                </Slide>
            </Slider>
            <ButtonBack className="slide-buttons">
                <ChevronLeftIcon />
            </ButtonBack>
            <ButtonNext className="slide-buttons">
                <ChevronRightIcon />
            </ButtonNext>
            {/* <DotGroup /> */}
        </CarouselProvider>
    );
}

export default Carousel;
