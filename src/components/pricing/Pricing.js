import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 8,
        marginTop: 24,
        marginBottom: 24,
        maxWidth: 680,
    },
    card: {
        borderBottom: '2px solid #3f51b5',
    },
    priceNumber: {
        fontWeight: 700,
    },
}));

function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <Card className={classes.card}>
                        <CardContent
                            style={{ paddingBottom: 0 }}
                            className="price"
                        >
                            <div className="dollar-sign">$</div>
                            <div className="priceNumber">8</div>
                            <div className="each">/each</div>
                        </CardContent>
                        <CardHeader
                            style={{ textAlign: 'center' }}
                            title="Normal"
                        />
                        <CardContent className="price">
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Normal pricing has a $5 shipping fee. The
                                shipping fee will automatically be waived if
                                your order total is $50+ (before shipping fee is
                                applied).
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card
                        className={classes.card}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 316,
                        }}
                    >
                        <CardHeader
                            style={{ textAlign: 'center' }}
                            title="Wholesale"
                        />
                        <CardContent className="price">
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                Interested in buying in bulk? Please email
                                contact@cafacemasks.com to discuss options.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pricing;
