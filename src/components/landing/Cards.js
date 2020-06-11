import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import BlueBG from '../../img/BlueBG.jpg';
import LayersWhite from '../../img/LayersWhite.png';
import ReusableWhite from '../../img/ReusableWhite.png';
import ComfortWhite from '../../img/ComfortWhite.png';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 8,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: 16,
        paddingTop: 90,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    cardMedia: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -113px)',
        backgroundColor: theme.palette.primary.main,
        height: '95px',
        width: '95px',
        borderRadius: '50%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 10,
    },
    cardContent: {
        flexGrow: 1,
    },
    cardTitle: {
        fontFamily: 'Open Sans',
        textAlign: 'center',
    },
    cardText: {
        textAlign: 'center',
    },
}));

function Cards() {
    const classes = useStyles();

    const bgStyle = useMemo(() => {
        return {
            background: `#000 url(${BlueBG}) no-repeat center`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        };
    }, []);

    const renderCard = (cardIMG, cardTitle, cardText) => {
        return (
            <Grid item xs={12} sm={12} md={4}>
                <div className={classes.card}>
                    <div
                        className={classes.cardMedia}
                        style={{ backgroundImage: `url(${cardIMG})` }}
                    ></div>
                    <div className={classes.cardContent}>
                        <Typography
                            className={classes.cardTitle}
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {cardTitle}
                        </Typography>
                        <Typography
                            className={classes.cardText}
                            color="textSecondary"
                        >
                            {cardText}
                        </Typography>
                    </div>
                </div>
            </Grid>
        );
    };

    return (
        <div style={bgStyle}>
            <div className="landing-cards-bg-overlay"></div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {renderCard(
                        ReusableWhite,
                        'Reusable',
                        'It is highly recommended to wash and dry after each use. We suggest hand-washing with soap then hang to air dry.'
                    )}
                    {renderCard(
                        LayersWhite,
                        'Multi-layered',
                        'These masks are composed of tightly-woven cotton and non-woven polyester filters to ensure protection.'
                    )}
                    {renderCard(
                        ComfortWhite,
                        'Comfortable',
                        'Our selection of carefully curated fabrics are soft and easy to wear for extended periods.'
                    )}
                </Grid>
            </Container>
        </div>
    );
}

export default Cards;
