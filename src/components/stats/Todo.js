import React, { useEffect, useState } from 'react';
import keys from '../../config/keys';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TodoAdd from './TodoAdd';
import TodoRow from './TodoRow';

import FallbackImage from '../../img/Logo.jpg';

const useStyles = makeStyles({
    root: {
        marginTop: 60,
        width: '100%',
        maxWidth: 850,
        borderBottom: '2px solid #3f51b5',
        padding: 8,
        paddingBottom: 0,
    },
    header: {
        fontFamily: 'Open Sans',
    },
    statItem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    dailyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: '2px',
        width: '33.3%',
        border: 'none !important',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1080px',
        backgroundColor: 'white',
        border: '2px solid #000',
    },
    innerModal: {
        position: 'relative',
        padding: 0,
        margin: 0,
    },
    modalTitle: {
        textAlign: 'center',
        paddingBottom: 16,
    },
});

const API = keys.todoMasksAPI;
const header = {
    'Content-Type': 'application/json',
};

const calculateTotals = (data) => {
    let totals = {
        XL: 0,
        L: 0,
        M: 0,
        S: 0,
        XS: 0,
        all: 0,
    };
    Object.keys(data).forEach((item) => {
        totals.all += parseInt(data[item].Total);
        if (data[item].XL) totals.XL += parseInt(data[item].XL);
        if (data[item].L) totals.L += parseInt(data[item].L);
        if (data[item].M) totals.M += parseInt(data[item].M);
        if (data[item].S) totals.S += parseInt(data[item].S);
        if (data[item].XS) totals.XS += parseInt(data[item].XS);
    });
    return totals;
};

export default () => {
    let [totals, setTotals] = useState({});
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [modalOpen, setModalOpen] = useState(false);
    let [modalImage, setModalImage] = useState('Black');

    // Modal Stuff
    const handleModalOpen = (design) => {
        setModalImage(design);
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const renderModalContent = () => {
        const IMGFilename = modalImage.split(' ').join('');
        let src;
        try {
            src = require(`../../img/PostMaskPhotos/${IMGFilename}.jpg`);
        } catch (error) {
            src = FallbackImage;
        }
        return (
            <div className={classes.modal}>
                <div className={classes.innerModal}>
                    <img
                        src={src}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = FallbackImage;
                        }}
                        alt="Mask"
                        onClick={handleModalClose}
                        style={{ width: '100%', padding: 0 }}
                    />
                    <Typography
                        className={classes.modalTitle}
                        variant="h4"
                        component="h2"
                    >
                        {modalImage}
                    </Typography>
                </div>
            </div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            try {
                const response = await axios.get(API);
                // console.log(response);
                setData(response.data ? response.data : []);
                setTotals(calculateTotals(response.data));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setData([]);
                setTotals({});
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    const classes = useStyles();

    const updateNum = async (color, size, amount, action) => {
        let newData = data;
        if (action === 'add') {
            newData[color][size] += amount;
            newData[color]['Total'] += amount;
        } else if (action === 'remove') {
            if (newData[color][size] - amount < 0) return;
            newData[color][size] -= amount;
            newData[color]['Total'] -= amount;
            if (newData[color]['Total'] === 0) {
                delete newData[color];
            }
        }
        try {
            const event = {
                color,
                data: [
                    {
                        size,
                        amount,
                        action,
                    },
                ],
            };
            setData(newData);
            setTotals(calculateTotals(newData));
            await axios.post(API, event, header);
        } catch (error) {
            console.log(error);
        }
    };
    const addItem = async (design, XL, L, M, S, XS, Total) => {
        const addAction = (size, amount) => {
            return {
                size: size,
                action: 'add',
                amount: amount,
            };
        };
        // If data already exists, add to object, otherwise create new
        let newData = { ...data };
        if (newData[design]) {
            newData[design].XL += XL;
            newData[design].L += L;
            newData[design].M += M;
            newData[design].S += S;
            newData[design].XS += XS;
            newData[design].Total += Total;
        } else {
            newData[design] = { Color: design, XL, L, M, S, XS, Total };
        }
        let event = {
            color: design,
            data: [],
        };
        if (XL > 0) event.data.push(addAction('XL', XL));
        if (L > 0) event.data.push(addAction('L', L));
        if (M > 0) event.data.push(addAction('M', M));
        if (S > 0) event.data.push(addAction('S', S));
        if (XS > 0) event.data.push(addAction('XS', XS));
        try {
            console.log('Item added');
            setData(newData);
            setTotals(calculateTotals(newData));
            await axios.post(API, event, header);
        } catch (error) {
            console.log(error);
        }
    };
    const removeItem = async (design, XL, L, M, S, XS, Total) => {
        const removeAction = (size, amount) => {
            return {
                size: size,
                action: 'remove',
                amount: amount,
            };
        };
        let newData = data;

        let event = {
            color: design,
            data: [],
        };
        if (XL > 0) event.data.push(removeAction('XL', XL));
        if (L > 0) event.data.push(removeAction('L', L));
        if (M > 0) event.data.push(removeAction('M', M));
        if (S > 0) event.data.push(removeAction('S', S));
        if (XS > 0) event.data.push(removeAction('XS', XS));
        try {
            delete newData[design];
            setData(newData);
            setTotals(calculateTotals(newData));
            await axios.post(API, event, header);
        } catch (error) {
            console.log(error);
        }
    };
    const renderTable = () => {
        return (
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Design</TableCell>
                            <TableCell align="center">XL</TableCell>
                            <TableCell align="center">L</TableCell>
                            <TableCell align="center">M</TableCell>
                            <TableCell align="center">S</TableCell>
                            <TableCell align="center">XS</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TodoAdd addItem={addItem} />
                        {Object.keys(data).map((row, index) => {
                            if (data[row].Total === 0)
                                return <TableRow key={index} />;
                            return (
                                <TodoRow
                                    key={index}
                                    updateNum={updateNum}
                                    data={data}
                                    row={row}
                                    handleModalOpen={handleModalOpen}
                                    removeItem={removeItem}
                                    rowBGColor={
                                        index % 2 === 1
                                            ? '#fff'
                                            : 'rgb(245,245,245)'
                                    }
                                />
                            );
                        })}
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>All</strong>
                            </TableCell>
                            <TableCell align="center">{totals.XL}</TableCell>
                            <TableCell align="center">{totals.L}</TableCell>
                            <TableCell align="center">{totals.M}</TableCell>
                            <TableCell align="center">{totals.S}</TableCell>
                            <TableCell align="center">{totals.XS}</TableCell>
                            <TableCell align="center">
                                <strong>{totals.all}</strong>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent className={classes.dailyHeader}>
                <Typography
                    className={classes.header}
                    variant="h4"
                    component="h2"
                >
                    To Do
                </Typography>
            </CardContent>
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                renderTable()
            )}

            <Link to="/stats">
                <Button color="primary" className={classes.button}>
                    Total
                </Button>
            </Link>
            <Link to="/daily">
                <Button color="primary" className={classes.button}>
                    Daily
                </Button>
            </Link>
            <Link to="/todo">
                <Button color="primary" className={classes.button}>
                    Todo
                </Button>
            </Link>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="Mask Image"
                aria-describedby="Modal to pop up facemask image."
            >
                {renderModalContent()}
            </Modal>
        </Card>
    );
};
