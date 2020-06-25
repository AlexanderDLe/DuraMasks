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

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TodoNum from './TodoNum';

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

const Stats = () => {
    let [totals, setTotals] = useState({});
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            try {
                const response = await axios.get(API);
                console.log(response);
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

    const updateData = async (color, size, amount, action) => {
        let newData = data;
        if (action === 'add') {
            newData[color][size] += amount;
            newData[color]['Total'] += amount;
        } else if (action === 'remove') {
            if (newData[color][size] - amount < 0) return;
            newData[color][size] -= amount;
            newData[color]['Total'] -= amount;
        }
        try {
            const event = {
                color,
                size,
                amount,
                action,
            };
            await axios.post(API, event, header);
        } catch (error) {
            console.log(error);
        }
        setData(newData);
        setTotals(calculateTotals(newData));
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data).map((row) => {
                            if (data[row].Total === 0)
                                return <TableRow key={data[row].Color} />;
                            return (
                                <TableRow key={data[row].Color}>
                                    <TableCell component="th" scope="row">
                                        {data[row].Color}
                                    </TableCell>
                                    <TodoNum
                                        updateData={updateData}
                                        color={data[row].Color}
                                        size="XL"
                                        value={data[row].XL}
                                    />
                                    <TodoNum
                                        updateData={updateData}
                                        color={data[row].Color}
                                        size="L"
                                        value={data[row].L}
                                    />
                                    <TodoNum
                                        updateData={updateData}
                                        color={data[row].Color}
                                        size="M"
                                        value={data[row].M}
                                    />
                                    <TodoNum
                                        updateData={updateData}
                                        color={data[row].Color}
                                        size="S"
                                        value={data[row].S}
                                    />
                                    <TodoNum
                                        updateData={updateData}
                                        color={data[row].Color}
                                        size="XS"
                                        value={data[row].XS}
                                    />

                                    <TableCell align="center">
                                        {data[row].Total}
                                    </TableCell>
                                </TableRow>
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
                    To Do (Under Construction)
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
        </Card>
    );
};

export default Stats;
