import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layers from '../../img/Layers.png';
import Reusable from '../../img/Reusable.png';
import Comfort from '../../img/Comfort.png';

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
        borderBottom: '2px solid #3f51b5',
        margin: 8,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Cards() {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={Layers}
                        title="Layer Image"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Multi-layered
                        </Typography>
                        <Typography color="textSecondary">
                            These masks are composed of tight-woven cotton and
                            stabilizer cutaway (rayon & polyester) to ensure
                            thickness.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={Reusable}
                        title="Reusable Image"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Reusable
                        </Typography>
                        <Typography color="textSecondary">
                            It is highly recommended to wash and dry after each
                            use. We suggest hand-washing with soap then hang to
                            air dry.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={Comfort}
                        title="Comfort Image"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Comfortable
                        </Typography>
                        <Typography color="textSecondary">
                            Our selection of carefully curated fabrics are soft
                            and easy to wear for extended periods.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Cards;
