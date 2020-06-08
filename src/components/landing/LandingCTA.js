import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 6),
    },
    heroCaption: {
        fontSize: '1rem',
        fontWeight: 600,
        // marginBottom: 0,
    },
    heroCaption2: {
        fontSize: '.9rem',
        marginTop: 24,
        marginBottom: 0,
        // fontWeight: 600,
    },
    heroText: {
        fontSize: '1rem',
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    viewSelectionButton: {
        color: 'white !important',
        textDecoration: 'none',
    },
    learnMoreButton: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    sectionTitle: {
        fontFamily: 'Open Sans',
        marginBottom: 0,
    },
}));

function LandingCTA() {
    const classes = useStyles();

    const spring = {
        duration: 700,
        mass: 100,
    };
    const fadeRight = useSpring({
        config: { duration: spring.duration, mass: spring.mass },
        to: { opacity: 1, transform: 'translateX(0)' },
        from: { opacity: 0, transform: 'translateX(-30px)' },
    });
    const fadeLeft = useSpring({
        config: { duration: spring.duration, mass: spring.mass },
        to: { opacity: 1, transform: 'translateX(0)' },
        from: { opacity: 0, transform: 'translateX(30px)' },
    });

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    className={classes.sectionTitle}
                >
                    CA Facemasks
                </Typography>
                <Typography
                    variant="caption"
                    align="center"
                    color="textSecondary"
                    paragraph
                    className={classes.heroCaption}
                >
                    Over 100 Designs Available
                </Typography>
                <Typography
                    variant="caption"
                    align="center"
                    color="textSecondary"
                    paragraph
                    className={classes.heroText}
                >
                    "CDC recommends wearing cloth face coverings in public
                    settings where other social distancing measures are
                    difficult to maintain (e.g., grocery stores and pharmacies),
                    especially in areas of significant community-based
                    transmission."
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <animated.div style={fadeRight}>
                                <Button variant="contained" color="primary">
                                    <Link
                                        to="/selection"
                                        className={classes.viewSelectionButton}
                                    >
                                        View Selection
                                    </Link>
                                </Button>
                            </animated.div>
                        </Grid>
                        <Grid item>
                            <animated.div style={fadeLeft}>
                                <Button variant="outlined" color="primary">
                                    <Link
                                        className={classes.learnMoreButton}
                                        to="/faq"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </animated.div>
                        </Grid>
                    </Grid>
                </div>
                <Typography
                    variant="caption"
                    align="center"
                    color="textSecondary"
                    paragraph
                    className={classes.heroCaption2}
                >
                    Made in California, USA
                </Typography>
            </Container>
        </div>
    );
}

export default LandingCTA;
