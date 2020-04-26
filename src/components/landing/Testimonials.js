import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Carousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
            totalSlides={2}
            style={{ textAlign: 'center' }}
            interval={5000}
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
                        "I am very particular for buying Masks for myself and
                        family members so I have to search for a company who can
                        provide good quality masks with reasonable prices. I
                        found these Masks able to provide what I’m looking for.
                        I’m very happy once I tried it on. It fit my face
                        snuggly and I can breathe with it. Knowing they have 3
                        layers gives it more protection. I encourage everyone to
                        buy these Masks."
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        - Gina Le
                    </Typography>
                </Slide>
                <Slide className="slide" index={1}>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem', paddingTop: 30 }}
                    >
                        "I brought it home and my mom loved it and stole them
                        from me. I had to get more! I like them. They’re
                        comfortable, covers my face, and is not too heavy. I can
                        breath easily through them. Would highly recommend."
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        - Oscar Mejia
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
