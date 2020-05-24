import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: 'red',
        paddingTop: 24,
        height: '85px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
}));

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <h5>MEMORIAL DAY SALE</h5>
            <p>15% Off 50$+ Orders</p>
        </div>
    );
}

export default Banner;
