import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    cell: {
        paddingBottom: 8,
        paddingTop: 8,
    },
    addDesign: {
        width: 150,
    },
    addNum: {
        width: 50,
        paddingBottom: 8,
    },
    row: {
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        color: 'white',
        marginTop: 8,
    },
});

export default ({ addItem }) => {
    const classes = useStyles();
    const [design, setDesign] = useState('');
    const [XL, setXL] = useState(0);
    const [L, setL] = useState(0);
    const [M, setM] = useState(0);
    const [S, setS] = useState(0);
    const [XS, setXS] = useState(0);
    const total =
        parseInt(XL) + parseInt(L) + parseInt(M) + parseInt(S) + parseInt(XS);

    const handleAddItem = () => {
        let designRefined = design
            .split(' ')
            .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');
        if (design.length && total) {
            addItem(designRefined, XL, L, M, S, XS, total);
            setDesign('');
            setXL(0);
            setL(0);
            setM(0);
            setS(0);
            setXS(0);
        }
    };

    const processNum = (num) => {
        return Math.ceil(Math.abs(num));
    };

    const renderCell = (callback, size) => {
        return (
            <TableCell className={classes.cell} align="center" scope="row">
                <TextField
                    onChange={callback}
                    value={size ? size : ''}
                    type="tel"
                    className={classes.addNum}
                    inputProps={{ style: { textAlign: 'center' } }}
                />
            </TableCell>
        );
    };

    return (
        <TableRow className={classes.row}>
            <TableCell className={classes.cell} scope="row">
                <TextField
                    onChange={(e) => setDesign(e.target.value)}
                    className={classes.addDesign}
                    value={design}
                />
            </TableCell>
            {renderCell((e) => setXL(processNum(e.target.value) | 0), XL)}
            {renderCell((e) => setL(processNum(e.target.value) | 0), L)}
            {renderCell((e) => setM(processNum(e.target.value) | 0), M)}
            {renderCell((e) => setS(processNum(e.target.value) | 0), S)}
            {renderCell((e) => setXS(processNum(e.target.value) | 0), XS)}
            <TableCell className={classes.cell} align="center" scope="row">
                {total}
            </TableCell>
            <td className={classes.fab}>
                <Fab
                    color="primary"
                    variant="extended"
                    size="medium"
                    aria-label="add"
                    onClick={handleAddItem}
                >
                    <AddIcon /> Add
                </Fab>
            </td>
        </TableRow>
    );
};
