import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import Layers from '../../img/Layers.png';
// import Reusable from '../../img/Reusable.png';
// import Comfort from '../../img/Comfort.png';
import Layers from '../../img/LayersWhite.png';
import Reusable from '../../img/ReusableWhite.png';
import Comfort from '../../img/ComfortWhite.png';

import { makeStyles } from '@material-ui/core/styles';

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
        zIndex: 1500,
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

    const renderCard = (cardIMG, cardTitle, cardText) => {
        return (
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
        );
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4}>
                {renderCard(
                    Layers,
                    'Multi-layered',
                    'These masks are composed of tightly-woven cotton and a non-woven polyester blend to ensure thickness.'
                )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {renderCard(
                    Reusable,
                    'Reusable',
                    'It is highly recommended to wash and dry after each use. We suggest hand-washing with soap then hang to air dry.'
                )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                {renderCard(
                    Comfort,
                    'Comfortable',
                    'Our selection of carefully curated fabrics are soft and easy to wear for extended periods.'
                )}
            </Grid>
        </Grid>
    );
}

export default Cards;
