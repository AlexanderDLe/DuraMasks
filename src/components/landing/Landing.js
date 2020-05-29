import React, { useEffect, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LandingHero from './LandingHero';
// import Banner from '../misc/Banner';
import CircularProgress from '@material-ui/core/CircularProgress';

import LandingCTA from './LandingCTA';
// const LandingCTA = lazy(() => import('./LandingCTA'));
const Cards = lazy(() => import('./Cards'));
const Testimonials = lazy(() => import('./Testimonials'));

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    fallback: {
        height: '100vh',
    },
    loading: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function Album() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={classes.root}>
            {/* <Banner /> */}
            <Suspense
                fallback={
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                }
            >
                <LandingHero />
            </Suspense>
            <Suspense fallback={<div className={classes.fallback} />}>
                <LandingCTA />
                <Cards />
                <Testimonials />
            </Suspense>
        </main>
    );
}
