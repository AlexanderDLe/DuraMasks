import React, { useEffect, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LandingHero from './LandingHero';

import LandingCTA from './LandingCTA';
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

export default function Landing({ webp }) {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className={classes.root}>
            <LandingHero webp={webp} />
            <LandingCTA />
            <Suspense fallback={<div className={classes.fallback} />}>
                <Cards webp={webp} />
                <Testimonials />
            </Suspense>
        </main>
    );
}
