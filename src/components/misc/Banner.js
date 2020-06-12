import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Flag from '../../img/Flag.png';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#6868fd',
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
        fontSize: '1rem',
    },
}));

function Banner() {
    const classes = useStyles();
    const navMediaQuery = useMediaQuery('(min-width:330px)');
    const navMediaQuery600 = useMediaQuery('(min-width:600px)');

    const bannerHeader = useMemo(
        () => ({
            fontSize: navMediaQuery ? '1rem' : '.85rem',
        }),
        [navMediaQuery]
    );

    const bannerStyle = useMemo(
        () => ({
            paddingTop: navMediaQuery600 ? 24 : 18,
            height: navMediaQuery600 ? 85 : 70,
        }),
        [navMediaQuery600]
    );

    return (
        <div className={classes.banner} style={bannerStyle}>
            <img alt="Flag" className={classes.flag} src={Flag} />
            <div className={classes.textbox}>
                <h5 style={bannerHeader}>Use Code 15OFF</h5>
                <p>Get 15% Off 40$+ Orders</p>
            </div>
            <img alt="Flag" className={classes.flag} src={Flag} />
        </div>
    );
}

export default Banner;
