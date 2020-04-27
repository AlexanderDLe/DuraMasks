import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';

import { selection } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
        margin: 16,
    },
    media: {
        height: 280,
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
    buttonLink: {
        textDecoration: 'none',
        color: 'white',
    },
    customizeBox: {
        paddingTop: 26,
        display: 'flex',
    },
    itemActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1080px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    spanDimensions: {
        paddingLeft: 8,
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '.8rem',
    },
    smallSpanDimensions: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '.8rem',
        paddingBottom: 12,
    },
    smallQuery: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

function Item({ match, addOrder }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navMediaQuery = useMediaQuery('(min-width:420px)');

    const classes = useStyles();
    const data = selection[match.params.id];

    const [size, setSize] = React.useState('L');
    const [amount, setAmount] = React.useState(1);
    const [modalOpen, setModalOpen] = React.useState(false);
    const queueRef = useRef([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState(undefined);

    // Mask Order Configuration
    const handleChange = (event) => {
        setSize(event.target.value);
    };
    const handleAmountChange = (event) => {
        // Use Math.ceil to round up any decimals
        setAmount(Math.ceil(event.target.value));
    };
    const handleAddItem = () => () => {
        addOrder({
            color: data.color,
            size: size,
            amount: amount,
            param: data.param,
            img: data.img,
        });
        queueRef.current.push({
            message: `Added ${amount} item(s) to cart`,
            key: new Date().getTime(),
        });

        if (snackbarOpen) {
            setSnackbarOpen(false);
        } else {
            processQueue();
        }
    };

    // Snackbar
    const processQueue = () => {
        if (queueRef.current.length > 0) {
            setMessageInfo(queueRef.current.shift());
            setSnackbarOpen(true);
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    const handleExited = () => {
        processQueue();
    };

    // Modal
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const modalContent = (
        <div className={classes.modal}>
            <img
                src={require(`../../img/PostMaskPhotos/${data.img}`)}
                alt="Mask"
                onClick={handleModalClose}
                style={{ width: '100%' }}
            />
        </div>
    );

    // Radio Label Media Query Styles
    const radioQuery = navMediaQuery ? classes.normalQuery : classes.smallQuery;
    const spanQuery = navMediaQuery
        ? classes.spanDimensions
        : classes.smallSpanDimensions;

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography
                    className={classes.title}
                    gutterBottom
                    variant="h4"
                    component="h2"
                >
                    {data.color}
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={require(`../../img/PostMaskPhotos/${data.img}`)}
                title={data.color}
                onClick={handleModalOpen}
                style={{ cursor: 'pointer' }}
            />
            <CardContent className={classes.customizeBox}>
                <FormControl style={{ width: '50%' }} component="fieldset">
                    <FormLabel component="legend">Select Size</FormLabel>
                    <RadioGroup
                        aria-label="Mask Size"
                        name="Size"
                        value={size}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="XL"
                            control={<Radio color="primary" />}
                            label={
                                <div className={radioQuery}>
                                    XL Adult
                                    <span className={spanQuery}>
                                        10.5" x 7"
                                    </span>
                                </div>
                            }
                            className={classes.radioLabel}
                        />

                        <FormControlLabel
                            value="L"
                            control={<Radio color="primary" />}
                            label={
                                <div className={radioQuery}>
                                    L Adult
                                    <span className={spanQuery}>10" x 6"</span>
                                </div>
                            }
                        />
                        <FormControlLabel
                            value="M"
                            control={<Radio color="primary" />}
                            label={
                                <div className={radioQuery}>
                                    M Teen
                                    <span className={spanQuery}>9" x 5.5"</span>
                                </div>
                            }
                        />

                        <FormControlLabel
                            value="S"
                            control={<Radio color="primary" />}
                            label={
                                <div className={radioQuery}>
                                    S Child
                                    <span className={spanQuery}>8" x 5"</span>
                                </div>
                            }
                        />

                        <FormControlLabel
                            value="XS"
                            control={<Radio color="primary" />}
                            label={
                                <div className={radioQuery}>
                                    XS Child
                                    <span className={spanQuery}>7" x 4.5"</span>
                                </div>
                            }
                        />
                    </RadioGroup>
                </FormControl>
                <div style={{ width: '50%' }}>
                    <FormLabel style={{ paddingLeft: 5 }} component="legend">
                        Amount
                    </FormLabel>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={amount}
                        onChange={handleAmountChange}
                        style={{ paddingLeft: 5 }}
                    />
                    <br />
                    <br />
                    <p style={{ color: 'rgba(0,0,0,.5', fontSize: '.85rem' }}>
                        Dimensions are in Width x Height
                        <br />
                        <br />
                        Measuring tape was used to follow the cloth exterior
                        from one end to the other.
                    </p>
                </div>
            </CardContent>
            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/selection" className={classes.link}>
                        Back To Selections
                    </Link>
                </Button>
                <Button
                    onClick={handleAddItem()}
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Add To Cart
                </Button>
            </CardActions>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="Mask Image"
                aria-describedby="Modal to pop up facemask image."
            >
                {modalContent}
            </Modal>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                onExited={handleExited}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Card>
    );
}

export default Item;
