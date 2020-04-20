import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DesignCard from './DesignCard';
import { MaskDesigns } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: 'center',
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
    },
}));

function Selection() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderDesigns = () => {
        return MaskDesigns.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    return (
        <Container className={classes.root}>
            <Typography variant="h4" component="h2">
                Select A Design
            </Typography>
            <Typography
                gutterBottom
                variant="body1"
                component="h2"
                style={{ color: 'rgba(0,0,0,.6)' }}
            >
                Free shipping if you order 5 or more items.
                <br />
                More designs coming soon.
            </Typography>
            <Typography
                gutterBottom
                variant="body1"
                component="h2"
                style={{ paddingBottom: 24, color: 'rgba(0,0,0,.6)' }}
            ></Typography>
            <Grid container spacing={3}>
                {renderDesigns()}
            </Grid>
        </Container>
    );
}

export default Selection;
