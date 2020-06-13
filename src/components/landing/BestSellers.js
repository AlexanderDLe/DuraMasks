import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    },
    root: {
        paddingTop: '24px',
        // paddingBottom: '24px',
    },
    sectionTitle: {
        marginBottom: 0,
    },
    buttonDiv: {
        textAlign: 'center',
        paddingTop: 24,
    },
    viewSelectionButton: {
        color: 'white !important',
        textDecoration: 'none',
    },
}));

export default ({ queryStyles }) => {
    const classes = useStyles();
    const mediaQuery600 = useMediaQuery('(min-width:600px)');

    const viewEntireSelectionButton = useMemo(() => {
        return mediaQuery600 ? (
            ''
        ) : (
            <div className={classes.buttonDiv}>
                <Button variant="contained" color="primary">
                    <Link
                        to="/selection"
                        className={classes.viewSelectionButton}
                    >
                        View Entire Selection
                    </Link>
                </Button>
            </div>
        );
    }, [mediaQuery600, classes]);

    const renderCategory = () => {
        return bestSellers.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    return (
        <div className={classes.main} style={queryStyles.sectionPadding}>
            <Container maxWidth="sm">
                <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    className={classes.sectionTitle}
                    style={queryStyles.sectionTitle}
                >
                    Most Popular
                </Typography>
            </Container>
            <Container className={classes.root}>
                <Grid container spacing={2}>
                    {renderCategory()}
                </Grid>
                {viewEntireSelectionButton}
            </Container>
        </div>
    );
};
