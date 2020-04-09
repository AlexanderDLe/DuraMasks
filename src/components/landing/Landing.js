import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
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
}));

export default function Album() {
    const classes = useStyles();

    return (
        <main>
            <div className="landing-hero"></div>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        OC Facemasks
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={{ fontSize: '1.1rem' }}
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
                                    <Link to="/order" className={classes.link}>
                                        Buy Facemasks
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f51b5',
                                        }}
                                        to="/"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Cards />
            </Container>
        </main>
    );
}
