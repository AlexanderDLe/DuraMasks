import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        transform: 'scale(1)',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform .5s',
        },
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
    colorTitle: {
        paddingTop: 16,
        paddingBottom: 0,
    },
    designName: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
});

function DesignCard({ design }) {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Link className={classes.designName} to={`/item/${design.param}`}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={require(`../../img/PostMaskPhotos/${design.img}`)}
                        title="Mask Image"
                    />
                    <CardContent className={classes.colorTitle}>
                        <Typography variant="h6" component="h2">
                            {design.color}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            <Link
                                className={classes.link}
                                to={`/item/${design.param}`}
                            >
                                Select
                            </Link>
                        </Button>
                    </CardActions> */}
                </Card>
            </Link>
        </Grid>
    );
}

export default DesignCard;
