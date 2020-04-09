import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DesignCard from './DesignCard';
import { MaskDesigns } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: 'center',
        paddingBottom: 24,
    },
    root: {
        paddingTop: '64px',
    },
}));

function Order() {
    const classes = useStyles();

    const renderDesigns = () => {
        return MaskDesigns.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    return (
        <Container className={classes.root}>
            <Typography
                className={classes.title}
                gutterBottom
                variant="h4"
                component="h2"
            >
                Select Your Color
            </Typography>
            <Grid container spacing={3}>
                {renderDesigns()}
            </Grid>
        </Container>
    );
}

export default Order;
