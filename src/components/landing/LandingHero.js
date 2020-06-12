import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GreenBG from '../../img/LandingPhotos/GreenBG.jpg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
    root: {
        background: `url(${GreenBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    overlay: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.25)',
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
        fontWeight: '500',
    },
    arrowPos: {
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        color: 'white',
    },
});

function SelectionHero() {
    const navMediaQuery1980 = useMediaQuery('(min-width:1980px)');
    const navMediaQuery980 = useMediaQuery('(min-width:980px)');
    const navMediaQuery535 = useMediaQuery('(min-width:535px)');
    const classes = useStyles();

    const landingBG = useMemo(() => {
        const bgImg = navMediaQuery1980
            ? require(`../../img/LandingPhotos/LandingPhotoLong.jpg`)
            : navMediaQuery535
            ? require(`../../img/LandingPhotos/LandingPhotoMedium.jpg`)
            : require(`../../img/LandingPhotos/LandingPhotoSmall.jpg`);

        return {
            height: 'calc(100vh - 55px)',
            background: `url(${bgImg}) center / auto 100% no-repeat`,
        };
    }, [navMediaQuery535, navMediaQuery1980]);

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
                  arrow: {
                      fontSize: '3rem',
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
                  arrow: {
                      fontSize: '2.5rem',
                  },
              }
            : {
                  header: {
                      paddingTop: 225,
                      fontSize: '2.25rem',
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  arrow: {
                      fontSize: '2rem',
                  },
              };
    }, [navMediaQuery535, navMediaQuery980]);

    return (
        <div className={classes.root}>
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
                    <div className={classes.arrowPos}>
                        <KeyboardArrowDownIcon
                            style={textStyles.arrow}
                            className="arrow bounce"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectionHero;
