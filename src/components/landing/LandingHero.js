import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {},
    overlay: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.33)',
    },
    container: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    },
    textBox: { fontFamily: 'Open Sans' },
    button: {
        marginTop: 8,
        backgroundColor: 'white',
        fontWeight: '500',
        padding: '8px 32px 8px 32px',
    },
    caption: {
        fontWeight: '400',
    },
});

function SelectionHero({ webp }) {
    const navMediaQuery1980 = useMediaQuery('(min-width:1980px)');
    const navMediaQuery980 = useMediaQuery('(min-width:980px)');
    const navMediaQuery535 = useMediaQuery('(min-width:535px)');
    const classes = useStyles();

    const rootBG = useMemo(() => {
        let dir = webp ? 'webp/' : '';
        let format = webp ? 'webp' : 'jpg';

        const bgImg = require(`../../img/${dir}LandingPhotos/GreenBG.${format}`);

        return {
            background: `url(${bgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };
    }, [webp]);

    const landingBG = useMemo(() => {
        let dir = webp ? 'webp/' : '';
        let format = webp ? 'webp' : 'jpg';

        const bgImg = navMediaQuery1980
            ? require(`../../img/${dir}LandingPhotos/LandingPhotoLong.${format}`)
            : navMediaQuery535
            ? require(`../../img/${dir}LandingPhotos/LandingPhotoMedium.${format}`)
            : require(`../../img/${dir}LandingPhotos/LandingPhotoSmall.${format}`);

        return {
            height: 'calc(100vh - 55px)',
            background: `url(${bgImg}) center / auto 100% no-repeat`,
        };
    }, [navMediaQuery535, navMediaQuery1980, webp]);

    const textStyles = useMemo(() => {
        return navMediaQuery980
            ? {
                  header: {
                      paddingTop: 100,
                      fontSize: '3.5rem',
                  },
                  caption: {
                      fontSize: '1.5rem',
                  },
                  button: {
                      marginTop: 12,
                  },
              }
            : navMediaQuery535
            ? {
                  header: {
                      paddingTop: 150,
                      fontSize: '3rem',
                  },
                  caption: {
                      fontSize: '1.15rem',
                  },
                  button: {},
              }
            : {
                  header: {
                      paddingTop: 200,
                      fontSize: '2.25rem',
                  },
                  caption: {
                      fontSize: '1rem',
                  },
              };
    }, [navMediaQuery535, navMediaQuery980]);

    return (
        <div style={rootBG}>
            <div style={landingBG}>
                <div className={classes.overlay}>
                    <Container className={classes.container}>
                        <div className={classes.textBox}>
                            <div style={textStyles.space}></div>
                            <h1 style={textStyles.header}>CA Facemasks</h1>
                            <h2
                                style={textStyles.caption}
                                className={classes.caption}
                            >
                                Reusable. Multilayered. Comfortable.
                            </h2>
                            <Link to="/selection">
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default SelectionHero;
