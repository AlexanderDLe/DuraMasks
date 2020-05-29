import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Flag from '../../img/Flag.png';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#6868fd',
        paddingTop: 28,
        height: '85px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    textbox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    flag: {
        paddingBottom: 16,
        boxShadow: 'none',
    },
}));

function Banner() {
    const classes = useStyles();
    const navMediaQuery = useMediaQuery('(min-width:330px)');

    return (
        <div className={classes.banner}>
            <img alt="Flag" className={classes.flag} src={Flag} />
            <div className={classes.textbox}>
                <h5 style={{ fontSize: navMediaQuery ? '1rem' : '.85rem' }}>
                    MEMORIAL SALE
                </h5>
                <p>15% Off 50$+ Orders</p>
            </div>
            <img alt="Flag" className={classes.flag} src={Flag} />
        </div>
    );
}

export default Banner;
