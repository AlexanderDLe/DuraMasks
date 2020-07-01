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
// import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackToAdmin from './reusables/BackToAdmin';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    root: {
        marginTop: 60,
        width: '100%',
        maxWidth: 500,
        borderBottom: '2px solid #3f51b5',
        padding: 8,
        paddingBottom: 0,
    },
    header: {
        fontFamily: 'Open Sans',
    },
    dailyHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: '2px',
        border: 'none !important',
        padding: 16,
    },
    orderActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    status: {
        cursor: 'pointer',
    },
    link: {
        color: 'rgba(0,0,0,.87)',
    },
    title: {
        width: '50%',
    },
});

const API = keys.wholesalePutAPI;
const header = {
    'Content-Type': 'application/json',
};

export default () => {
    let [data, setData] = useState({});
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            try {
                const response = await axios.get(API);
                console.log(response.data);
                setData(response.data ? response.data : []);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setData([]);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    const classes = useStyles();
    console.log(data);

    const handleUpdateCompleted = async (ID) => {
        try {
            const newData = { ...data };
            newData[ID].Completed = !newData[ID].Completed;
            const event = {
                ID: ID,
                action: 'UpdateCompleted',
            };
            setData(newData);
            await axios.put(API, event, header);
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
                            <TableCell className={classes.title}>
                                Title
                            </TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data).map((key, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <Link
                                        className={classes.link}
                                        to={`/wholesale/${key}`}
                                    >
                                        {data[key].Title}
                                    </Link>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    component="th"
                                    scope="row"
                                >
                                    {data[key].Total}
                                </TableCell>
                                <TableCell align="center">
                                    <CheckIcon
                                        onClick={() =>
                                            handleUpdateCompleted(key)
                                        }
                                        className={classes.status}
                                        style={{
                                            color: data[key].Completed
                                                ? '#55cc55'
                                                : '#cccccc',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
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
                    <BackToAdmin /> Wholesale
                </Typography>
            </CardContent>
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                renderTable()
            )}
            <div className={classes.orderActions}>
                <Link to="/admin">
                    <Button color="primary" className={classes.button}>
                        Admin
                    </Button>
                </Link>
                <Link to="/wholesale/create">
                    <Button
                        color="primary"
                        size="small"
                        className={classes.button}
                    >
                        Create New
                    </Button>
                </Link>
            </div>
        </Card>
    );
};
