import React, { useEffect, useState } from 'react';
// import keys from '../../config/keys';
// import axios from 'axios';

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
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    cellContent: {
        textAlign: 'center',
    },
    icon: {
        fontSize: '1.25rem',
        position: 'relative',
        top: 4,
        // paddingTop: 8,
        // marginTop: 8,
    },
});

// const API = keys.dailyMasksAPI;

let testData = [
    {
        Color: 'Paws',
        XL: 1,
        L: 1,
        M: 0,
        S: 0,
        XS: 0,
        Total: 2,
    },
    {
        Color: 'Black',
        XL: 0,
        L: 1,
        M: 2,
        S: 0,
        XS: 3,
        Total: 6,
    },
    {
        Color: 'White',
        XL: 1,
        L: 0,
        M: 1,
        S: 0,
        XS: 1,
        Total: 3,
    },
];

const calculateTotals = (data) => {
    let totals = {
        XL: 0,
        L: 0,
        M: 0,
        S: 0,
        XS: 0,
        all: 0,
    };
    for (let color of data) {
        totals.all += parseInt(color.Total);
        if (color.XL) totals.XL += parseInt(color.XL);
        if (color.L) totals.L += parseInt(color.L);
        if (color.M) totals.M += parseInt(color.M);
        if (color.S) totals.S += parseInt(color.S);
        if (color.XS) totals.XS += parseInt(color.XS);
    }
    return totals;
};

const Stats = () => {
    let [totals, setTotals] = useState({});
    let [data, setData] = useState(testData);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            try {
                // const response = await axios.get(API, {
                //     params: {
                //         date: calculateTimestamp(),
                //         // date: '2020-05-24',
                //     },
                // });
                const response = { data: { payload: testData } };
                setData(response.data.payload ? response.data.payload : []);
                setTotals(calculateTotals(response.data.payload));
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
    console.log(totals);
    console.log(data);

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
                        {data.map((row) => (
                            <TableRow key={row.Color}>
                                <TableCell component="th" scope="row">
                                    {row.Color}
                                </TableCell>
                                <TableCell align="center">
                                    <RemoveIcon className={classes.icon} />
                                    {row.XL ? row.XL : 0}
                                    <AddIcon className={classes.icon} />
                                </TableCell>
                                <TableCell align="center">
                                    <RemoveIcon className={classes.icon} />
                                    {row.L ? row.L : 0}
                                    <AddIcon className={classes.icon} />
                                </TableCell>
                                <TableCell align="center">
                                    <RemoveIcon className={classes.icon} />
                                    {row.M ? row.M : 0}
                                    <AddIcon className={classes.icon} />
                                </TableCell>
                                <TableCell align="center">
                                    <RemoveIcon className={classes.icon} />
                                    {row.S ? row.S : 0}
                                    <AddIcon className={classes.icon} />
                                </TableCell>
                                <TableCell align="center">
                                    <RemoveIcon className={classes.icon} />
                                    {row.XS ? row.XS : 0}
                                    <AddIcon className={classes.icon} />
                                </TableCell>
                                <TableCell align="center">
                                    {row.Total}
                                </TableCell>
                            </TableRow>
                        ))}
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
