import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        maxWidth: 345,
        borderRadius: 0,
        transform: 'scale(1)',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform .5s',
        },
    },
    bestseller: {
        position: 'absolute',
        color: 'red',
        right: 8,
        top: 8,
        textAlign: 'center',
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
    designName: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
    cardTitle: {
        textAlign: 'center',
    },
});

function DesignCard({ design }) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={4} md={3}>
            <Link className={classes.designName} to={`/item/${design.param}`}>
                <Card className={classes.root} elevation={1}>
                    {design.hot ? (
                        <div className={classes.bestseller}>
                            <WhatshotIcon />
                            {/* <p>Hot</p> */}
                        </div>
                    ) : (
                        ''
                    )}
                    <CardMedia
                        className={classes.media}
                        image={require(`../../img/SmallMaskPhotos/${design.img}`)}
                        title={design.color}
                    />
                    <CardContent>
                        <Typography
                            className={classes.cardTitle}
                            variant="body1"
                            component="h2"
                        >
                            {design.color}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default DesignCard;
