import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 8,
        marginTop: 24,
        marginBottom: 24,
        maxWidth: 400,
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
    const [pricingState, setPricingState] = useState('normal');

    const setPricingToNormal = () => {
        setPricingState('normal');
    };

    const setPricingToWholesale = () => {
        setPricingState('wholesale');
    };

    const normalPricingContent = (
        <React.Fragment>
            <CardContent style={{ paddingBottom: 0 }} className="price">
                <div className="dollar-sign">$</div>
                <div className="priceNumber">8</div>
                <div className="each">/each</div>
            </CardContent>
            <CardHeader
                style={{ textAlign: 'center', paddingTop: 0 }}
                title="Normal"
            />
            <CardContent className="price">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: 'left' }}
                >
                    Normal pricing has a $5 shipping fee. The shipping fee will
                    automatically be waived if your order total is $50+ (before
                    shipping fee is applied).
                    <br />
                    <br />
                    You can also buy masks directly in-person at our shop at
                    2424 W Ball Rd Unit D, Anaheim, CA 92804.
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    const wholesalePricingContent = (
        <React.Fragment>
            <CardHeader
                style={{ textAlign: 'center', paddingTop: '32px' }}
                title="Wholesale"
            />
            <CardContent className="price">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: 'left' }}
                >
                    Interested in buying in bulk? Please email
                    contact@cafacemasks.com or call (714)944-5209 to discuss
                    options.
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item>
                    <Card className={classes.card}>
                        {pricingState === 'normal'
                            ? normalPricingContent
                            : wholesalePricingContent}
                        <ButtonGroup
                            variant="contained"
                            color="primary"
                            aria-label="contained primary button group"
                            style={{ width: '100%', marginTop: 16 }}
                        >
                            <Button
                                style={{
                                    borderTopLeftRadius: '0',
                                    width: '50%',
                                }}
                                onClick={setPricingToNormal}
                            >
                                Normal
                            </Button>
                            <Button
                                style={{
                                    borderWidth: '2px',
                                    borderTopRightRadius: '0',
                                    width: '50%',
                                }}
                                onClick={setPricingToWholesale}
                            >
                                Wholesale
                            </Button>
                        </ButtonGroup>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pricing;
