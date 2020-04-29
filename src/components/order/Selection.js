import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DesignCard from './DesignCard';
import CustomCard from './CustomCard';
import { selection } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: 'center',
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
    },
    categoryTitle: {
        fontSize: '1.5rem',
        paddingTop: 40,
        paddingBottom: 16,
    },
}));

function Selection() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const solid = [];
    const floral = [];
    const pattern = [];

    const sortCategories = () => {
        Object.keys(selection).map((key, index) => {
            let category = selection[key].category;
            switch (category) {
                case 'solid':
                    solid.push(selection[key]);
                    break;
                case 'floral':
                    floral.push(selection[key]);
                    break;
                case 'pattern':
                    pattern.push(selection[key]);
                    break;
                default:
                    break;
            }
            return '';
        });
    };
    sortCategories();
    console.log(solid);
    console.log(floral);
    console.log(pattern);
    console.log('-------');

    const renderCategory = (category) => {
        return category.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    const renderDesigns = () => {
        return (
            <React.Fragment>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.categoryTitle}
                >
                    Solid Designs
                </Typography>
                <Grid container spacing={3}>
                    {renderCategory(solid)}
                </Grid>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.categoryTitle}
                >
                    Patterned Designs
                </Typography>
                <Grid container spacing={3}>
                    {renderCategory(pattern)}
                </Grid>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.categoryTitle}
                >
                    Floral Designs
                </Typography>
                <Grid container spacing={3}>
                    {renderCategory(floral)}
                </Grid>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.categoryTitle}
                >
                    Custom Designs
                </Typography>
                <Grid container spacing={3}>
                    <CustomCard />
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <Container className={classes.root}>
            <div style={{ textAlign: 'center', paddingTop: 24 }}>
                <Typography variant="h4" component="h2">
                    Select A Design
                </Typography>
                <Typography
                    gutterBottom
                    variant="body1"
                    component="h2"
                    style={{ color: 'rgba(0,0,0,.6)' }}
                >
                    Free shipping for $50+ orders.
                    <br />
                    More designs coming soon.
                </Typography>
            </div>
            {renderDesigns()}
        </Container>
    );
}

export default Selection;
