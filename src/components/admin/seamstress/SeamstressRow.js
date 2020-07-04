import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// import AddIcon from '@material-ui/icons/Add';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles({
    status: {
        cursor: 'pointer',
    },
    link: {
        color: 'rgba(0,0,0,.87)',
    },
    removalConfirmation: {
        position: 'absolute',
    },
    confirmBox: {
        padding: 16,
        paddingBottom: 0,
        // marginLeft: 8,
        backgroundColor: 'white',
        transform: 'translateY(-25%)',
        boxShadow: '0px 5px 8px -5px #888888',
    },
});

function WholesaleRow({ index, id, data }) {
    const classes = useStyles();

    const [mouseHover, setMouseHover] = useState(false);

    return (
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                <Link className={classes.link} to={`/seamstress/${id}`}>
                    {data[id].Name}
                </Link>
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {data[id].Amount}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {data[id].Date}
            </TableCell>
            <TableCell align="center">
                <RotateLeftIcon
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => {
                        setMouseHover(false);
                    }}
                    className={classes.status}
                    style={{
                        color: mouseHover ? 'red' : '#cccccc',
                    }}
                />
            </TableCell>
        </TableRow>
    );
}

export default WholesaleRow;
