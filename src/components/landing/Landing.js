import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import Cards from './Cards';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    testimonialSection: {
        backgroundColor: '#fff',
        padding: theme.spacing(6, 0, 6),
    },
}));

export default function Album() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ width: '100%' }}>
            <Parallax
                // bgImage={require('../../img/PostMaskPhotos/LandingMask.jpg')}
                bgImage={require('../../img/WomanWithMask.jpg')}
                bgImageAlt="Navy Facemask"
                strength={150}
            >
                <div style={{ height: '500px' }} />
            </Parallax>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h2"
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        CA Facemasks
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1rem' }}
                    >
                        "CDC recommends wearing cloth face coverings in public
                        settings where other social distancing measures are
                        difficult to maintain (e.g., grocery stores and
                        pharmacies), especially in areas of significant
                        community-based transmission."
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    <Link
                                        to="/selection"
                                        className={classes.link}
                                    >
                                        Buy Facemasks
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f51b5',
                                        }}
                                        target="_blank"
                                        href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className="landing-cards-div">
                <div className="landing-cards-bg-overlay"></div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Cards />
                </Container>
            </div>
            <div className={classes.testimonialSection}>
                <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Testimonials
                </Typography>
                <Container
                    className={classes.cardGrid}
                    maxWidth="sm"
                    style={{ paddingBottom: 0 }}
                >
                    <Carousel />
                </Container>
            </div>
        </main>
    );
}
