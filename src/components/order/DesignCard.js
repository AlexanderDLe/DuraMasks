import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
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
});

function DesignCard({ design }) {
    const classes = useStyles();
    console.log(design);
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={require(`../../img/PostMaskPhotos/${design.img}`)}
                    title="Mask Image"
                />
                <CardContent className={classes.colorTitle}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {design.color}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link
                            className={classes.link}
                            to={`/item/${design.param}`}
                        >
                            Select
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default DesignCard;
