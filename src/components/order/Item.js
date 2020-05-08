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

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Modal from '@material-ui/core/Modal';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import MaskOrderForm from './MaskOrderForm';
import ElasticOrderForm from './ElasticOrderForm';
import { selection } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
        margin: 16,
        marginTop: 40,
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
        paddingTop: 16,
        display: 'flex',
    },
    itemActions: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 8px',
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
    smallQuery: {
        display: 'flex',
        flexDirection: 'column',
    },
    innerModal: {
        position: 'relative',
        padding: 0,
        margin: 0,
    },
    modalLeftChevron: {
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        left: '10px',
        fontSize: '2rem',
    },
    modalRightChevron: {
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        right: '10px',
        fontSize: '2rem',
    },
    title: {
        paddingBottom: 0,
        marginBottom: 0,
        fontFamily: 'Open Sans',
    },
}));

function Item({ match, addOrder }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navMediaQuery = useMediaQuery('(min-width:420px)');
    const navMediaQuery600 = useMediaQuery('(min-width:600px)');

    const classes = useStyles();
    const data = selection[match.params.id];

    const defaultSize = data.type === 'Mask' ? 'L' : '200 Yards';

    const [size, setSize] = React.useState(defaultSize);
    const [amount, setAmount] = React.useState(1);
    const [modalOpen, setModalOpen] = React.useState(false);
    const queueRef = useRef([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState(undefined);
    const [angledState, setAngledState] = useState('PostMaskPhotos');

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
            type: data.type,
            color: data.color,
            size: size,
            amount: amount,
            param: data.param,
            price: data.price,
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
    const handleAngleStateChange = () => {
        if (angledState === 'PostMaskPhotos') setAngledState('AngledPhotos');
        if (angledState === 'AngledPhotos') setAngledState('PostMaskPhotos');
    };
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const modalActions = (
        <div className={classes.modalActions}>
            <ChevronLeftIcon
                onClick={handleAngleStateChange}
                className={classes.modalLeftChevron}
                style={{ fontSize: `${navMediaQuery ? '' : ''}` }}
            />
            <ChevronRightIcon
                onClick={handleAngleStateChange}
                className={classes.modalRightChevron}
            />
        </div>
    );
    const modalContent = (
        <div className={classes.modal}>
            <div className={classes.innerModal}>
                <img
                    src={require(`../../img/${angledState}/${data.img}`)}
                    alt="Mask"
                    onClick={handleModalClose}
                    style={{ width: '100%', padding: 0 }}
                />
                {data.angled ? modalActions : ''}
            </div>
        </div>
    );

    return (
        <Card
            style={{ marginTop: navMediaQuery600 ? 40 : 16 }}
            className={classes.root}
            elevation={3}
        >
            <CardContent className={classes.title}>
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
            {data.type === 'Mask' ? (
                <MaskOrderForm
                    handleChange={handleChange}
                    amount={amount}
                    size={size}
                    navMediaQuery={navMediaQuery}
                    handleAmountChange={handleAmountChange}
                />
            ) : (
                <ElasticOrderForm
                    handleChange={handleChange}
                    amount={amount}
                    size={size}
                    navMediaQuery={navMediaQuery}
                    handleAmountChange={handleAmountChange}
                />
            )}
            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/selection" className={classes.link}>
                        Back To Selection
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
