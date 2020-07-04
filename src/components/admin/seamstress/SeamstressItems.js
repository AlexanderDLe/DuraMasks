import React, { useState, useEffect } from 'react';
import keys from '../../../config/keys';
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

import BackToAdmin from '../reusables/BackToAdmin';

const useStyles = makeStyles({
    root: {
        marginTop: 60,
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        padding: 8,
        paddingBottom: 0,
    },
    header: {
        fontFamily: 'Open Sans',
    },
    todoHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: '2px',
        border: 'none !important',
        padding: 16,
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    totalError: {
        color: 'red',
        paddingTop: 20,
    },
    caption: {
        fontSize: '.9rem',
        paddingLeft: 16,
        color: 'rgba(0,0,0,.7)',
    },
});

const getItemAPI = keys.seamstressItemAPI;
// const putItemAPI = keys.wholesalePutAPI;
// const header = {
//     'Content-Type': 'application/json',
// };

export default ({ match }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            try {
                const response = await axios.get(getItemAPI, {
                    params: {
                        ID: match.params.id,
                    },
                });
                console.log(response.data);
                setData(response.data ? response.data : []);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setData({});
                setLoading(false);
            }
        }
        fetchData();
    }, [match.params.id]);

    console.log(data);

    // const removeItem = (design) => {
    //     let newData = data;
    //     delete newData[design];
    //     setData(newData);
    // };

    const renderTable = () => {
        return (
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(data.Items).map((id, index) => {
                            let { Date, Amount } = data.Items[id];
                            return (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {Date}
                                    </TableCell>
                                    <TableCell align="center">
                                        {Amount}
                                    </TableCell>
                                    <TableCell align="center">
                                        Actions
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent className={classes.todoHeader}>
                <Typography
                    className={classes.header}
                    variant="h4"
                    component="h2"
                >
                    <BackToAdmin path="/seamstress" />
                    {data.Name}
                </Typography>
            </CardContent>
            {loading ? (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                renderTable()
            )}
            <div className={classes.actions}>
                <Link to="/admin">
                    <Button color="primary" className={classes.button}>
                        Admin
                    </Button>
                </Link>
            </div>
        </Card>
    );
};
