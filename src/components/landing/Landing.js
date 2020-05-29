import React, { useEffect, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LandingHero from './LandingHero';
import Banner from '../misc/Banner';

const LandingCTA = lazy(() => import('./LandingCTA'));
const Cards = lazy(() => import('./Cards'));
const Testimonials = lazy(() => import('./Testimonials'));

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    fallback: {
        height: '100vh',
    },
});

export default function Album() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={classes.root}>
            <Banner />
            <LandingHero />
            <Suspense fallback={<div className={classes.fallback} />}>
                <LandingCTA />
            </Suspense>
            <Suspense fallback={<div />}>
                <Cards />
                <Testimonials />
            </Suspense>
        </main>
    );
}
