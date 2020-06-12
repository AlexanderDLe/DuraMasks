import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import DesignCard from '../order/DesignCard';

const maskPrice = 12.5;
const bestSellers = [
    {
        type: 'Mask',
        color: 'Midnight',
        img: 'Midnight.jpg',
        param: 'midnight',
        price: maskPrice,
        category: 'floral',
        angled: true,
        tags: ['black', 'yellow', 'white'],
    },
    {
        type: 'Mask',
        color: 'Navy Bandana',
        img: 'NavyBandana.jpg',
        param: 'navybandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        tags: ['blue'],
    },
    {
        type: 'Mask',
        color: 'White Bandana',
        img: 'WhiteBandana.jpg',
        param: 'whitebandana',
        price: maskPrice,
        category: 'bandana',
        angled: true,
        tags: ['black'],
    },
    {
        type: 'Mask',
        color: 'Paws',
        img: 'Paws.jpg',
        param: 'paws',
        price: maskPrice,
        category: 'animal',
        angled: true,
        tags: ['black', 'dog'],
    },
    {
        type: 'Mask',
        color: 'Floral Blue',
        img: 'FloralBlue.jpg',
        param: 'floralblue',
        price: maskPrice,
        category: 'floral',
        angled: true,
        tags: [],
    },
    {
        type: 'Mask',
        color: 'Navy Camo',
        img: 'NavyCamo.jpg',
        param: 'navycamo',
        price: maskPrice,
        category: 'pattern',
        angled: true,
        tags: ['blue'],
    },
    {
        type: 'Mask',
        color: 'Navy Blue',
        img: 'NavyBlue.jpg',
        param: 'navyblue',
        price: maskPrice,
        category: 'solid',
        angled: true,
        tags: [],
    },
    {
        type: 'Mask',
        color: 'Hula',
        img: 'Hula.jpg',
        param: 'hula',
        price: maskPrice,
        category: 'hawaiian',
        angled: false,
        tags: ['pink', 'red', 'green'],
    },
];

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        padding: theme.spacing(6, 0, 6),
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
    },
}));

function LandingCTA() {
    const classes = useStyles();

    const renderCategory = () => {
        return bestSellers.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    return (
        <div className={classes.main}>
            <Container maxWidth="sm">
                <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    className={classes.sectionTitle}
                >
                    Top Sellers
                </Typography>
            </Container>
            <Container className={classes.root}>
                <Grid container spacing={3}>
                    {renderCategory()}
                </Grid>
            </Container>
        </div>
    );
}

export default LandingCTA;
