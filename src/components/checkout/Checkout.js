import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        maxWidth: '800px',
        height: '500px',
        backgroundColor: 'white',
        boxShadow: '0px 2px 7px -4px rgba(0,0,0,.7)',
        padding: 16,
    },
}));

export default function Checkout() {
    const classes = useStyles();

    return <div className={classes.root}>CHECKOUT PAGE</div>;
}
