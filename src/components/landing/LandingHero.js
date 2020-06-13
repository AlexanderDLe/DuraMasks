import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GreenBG from '../../img/LandingPhotos/GreenBG.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        overflow: 'hidden',
    },
    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        background: `url(${GreenBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: 0,
        zIndex: -1,
    },
    container: {
        zIndex: '100',
        width: '100%',
        height: '100%',
        color: 'white',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        paddingBottom: 12,
    },
    textBox: {
        width: '100%',
        marginTop: 'auto',
        fontFamily: 'Open Sans',
        backgroundColor: 'white',
        padding: '12px 4px 0px 4px',
        textAlign: 'center',
    },
    header: {
        marginBottom: 0,
    },
    button: {
        color: 'white',
        fontWeight: '500',
        margin: '16px 0px',
    },
    caption: {
        marginBottom: 0,
    },
    usa: {},
});

function SelectionHero({ queryStyles }) {
    const navMediaQuery980 = useMediaQuery('(min-width:980px)');
    const navMediaQuery535 = useMediaQuery('(min-width:535px)');
    const navMediaQuery420 = useMediaQuery('(min-width:420px)');
    const navMediaQuery340 = useMediaQuery('(min-width:340px)');
    const classes = useStyles();

    const landingBG = useMemo(() => {
        const bgImg = navMediaQuery535
            ? require(`../../img/LandingPhotos/LandingPhotoDesktop.jpg`)
            : require(`../../img/LandingPhotos/LandingPhotoPhone.jpg`);

        return {
            height: 'calc(50vh)',
            background: `url(${bgImg}) center / auto 100% no-repeat`,
        };
    }, [navMediaQuery535]);

    const FacemaskIcon = useMemo(() => {
        return navMediaQuery535
            ? require(`../../img/LandingPhotos/FacemaskIcon1.jpg`)
            : require(`../../img/LandingPhotos/FacemaskIcon2.jpg`);
    }, [navMediaQuery535]);

    const textStyles = useMemo(() => {
        return navMediaQuery980
            ? {
                  header: {
                      fontSize: '2rem',
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  button: {
                      fontSize: '.85rem',
                      padding: '8px 32px 8px 32px',
                  },
              }
            : navMediaQuery535
            ? {
                  header: {
                      fontSize: '1.85rem',
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  button: {
                      fontSize: '.85rem',
                      padding: '6px 24px 6px 24px',
                  },
              }
            : navMediaQuery420
            ? {
                  header: {
                      fontSize: '1.5rem',
                      fontWeight: 500,
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  button: {
                      fontSize: '.85rem',
                      padding: '4px 16px 4px 16px',
                  },
              }
            : navMediaQuery340
            ? {
                  header: {
                      fontSize: '1.22rem',
                      fontWeight: 500,
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  button: {
                      fontSize: '.8rem',
                      padding: '4px 16px 4px 16px',
                  },
              }
            : {
                  header: {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                  },
                  caption: {
                      fontSize: '1rem',
                  },
                  button: {
                      fontSize: '.8rem',
                      padding: '4px 16px 4px 16px',
                  },
              };
    }, [
        navMediaQuery340,
        navMediaQuery420,
        navMediaQuery535,
        navMediaQuery980,
    ]);

    return (
        <div className={classes.root}>
            <div className={classes.overlay}></div>
            <div style={landingBG}></div>
            <div
                className={classes.container}
                style={queryStyles.sectionPadding}
            >
                <div className={classes.textBox}>
                    <img
                        className={classes.logo}
                        src={FacemaskIcon}
                        alt="Facemask Icon"
                    />
                    <Typography
                        component="h2"
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        className={classes.header}
                        style={textStyles.header}
                    >
                        Reusable. Multilayered. Comfortable.
                    </Typography>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={textStyles.caption}
                        className={classes.caption}
                    >
                        <strong>100+</strong> Premium designs to keep yourself
                        protected in style.
                    </Typography>

                    <Link to="/selection">
                        <Button
                            variant="contained"
                            className={classes.button}
                            style={textStyles.button}
                            color="primary"
                        >
                            View Selection
                        </Button>
                    </Link>
                    <Typography
                        variant="caption"
                        align="center"
                        color="textSecondary"
                        paragraph
                        style={textStyles.caption}
                        className={classes.usa}
                    >
                        Made in California, USA
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default SelectionHero;
