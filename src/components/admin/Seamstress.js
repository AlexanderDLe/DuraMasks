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
import BackToAdmin from './reusables/BackToAdmin';
import SeamstressRow from './seamstress/SeamstressRow';

const useStyles = makeStyles({
    root: {
        marginTop: 60,
        width: '100%',
        maxWidth: 700,
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
});

const API = keys.seamstressAPI;
// const header = {
//     'Content-Type': 'application/json',
// };

// const testData = {
//     1: {
//         Name: 'Nga',
//         Amount: 50,
//         Date: '2020-07-01',
//     },
//     2: {
//         Name: 'Binh',
//         Amount: 45,
//         Date: '2020-07-01',
//     },
//     3: {
//         Name: 'Hanh',
//         Amount: 70,
//         Date: '2020-07-01',
//     },
// };

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

    const renderTable = () => {
        return (
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 20 }}>Status</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell style={{ width: 120 }} align="center">
                                Date
                            </TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data).map((id, index) => (
                            <SeamstressRow
                                key={index}
                                index={index}
                                id={id}
                                data={data}
                            />
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
                    <BackToAdmin /> Seamstress
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
                        Add New Seamstress
                    </Button>
                </Link>
            </div>
        </Card>
    );
};
