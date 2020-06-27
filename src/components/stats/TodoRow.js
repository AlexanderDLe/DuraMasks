import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TodoNum from './TodoNum';
import TableCell from '@material-ui/core/TableCell';
// import Fab from '@material-ui/core/Fab';
// import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    designName: {
        cursor: 'pointer',
    },
    row: {
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        color: 'red',
        marginTop: 14,
        marginLeft: 8,
    },
});

function TodoRow({ data, row, updateNum, handleModalOpen }) {
    const classes = useStyles();
    return (
        <TableRow className={classes.row} key={data[row].Color}>
            <TableCell
                className={classes.designName}
                component="th"
                scope="row"
                onClick={() => handleModalOpen(data[row].Color)}
            >
                {data[row].Color}
            </TableCell>
            <TodoNum
                updateNum={updateNum}
                color={data[row].Color}
                size="XL"
                value={data[row].XL}
            />
            <TodoNum
                updateNum={updateNum}
                color={data[row].Color}
                size="L"
                value={data[row].L}
            />
            <TodoNum
                updateNum={updateNum}
                color={data[row].Color}
                size="M"
                value={data[row].M}
            />
            <TodoNum
                updateNum={updateNum}
                color={data[row].Color}
                size="S"
                value={data[row].S}
            />
            <TodoNum
                updateNum={updateNum}
                color={data[row].Color}
                size="XS"
                value={data[row].XS}
            />
            <TableCell align="center">{data[row].Total}</TableCell>
            {/* <td className={classes.fab}>
                <ClearIcon className={classes.icon} />
            </td> */}
        </TableRow>
    );
}

export default TodoRow;
