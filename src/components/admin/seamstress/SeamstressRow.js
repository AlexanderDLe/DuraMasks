import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Timestamper from '../../misc/Timestamper';

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
    let seamstressActive = data[id].Active;

    const [mouseHover, setMouseHover] = useState(false);
    const [descriptionField, setDescriptionField] = useState('');

    const statusStyle = useMemo(() => {
        let statusColor = seamstressActive ? '#55cc55' : '#ccc';
        return {
            color: statusColor,
        };
    }, [seamstressActive]);

    const renderAction = () => {
        if (seamstressActive) {
            return (
                <RotateLeftIcon
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => {
                        setMouseHover(false);
                    }}
                    className={classes.status}
                    style={{
                        color: mouseHover ? 'blue' : '#cccccc',
                    }}
                />
            );
        } else {
            return (
                <AddIcon
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => {
                        setMouseHover(false);
                    }}
                    className={classes.status}
                    style={{
                        color: mouseHover ? '#55cc55' : '#cccccc',
                    }}
                />
            );
        }
    };

    const renderDescription = () => {
        if (seamstressActive) {
            return data[id].Description;
        } else {
            return (
                <TextField
                    value={descriptionField}
                    onChange={(e) => setDescriptionField(e.target.value)}
                    inputProps={{ style: { textAlign: 'center' } }}
                />
            );
        }
    };
    const renderDate = () => {
        if (seamstressActive) {
            return data[id].Date;
        } else {
            return Timestamper().split('T').join(' ').slice(0, -15);
        }
    };

    return (
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                <FiberManualRecordIcon style={statusStyle} />
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                <Link className={classes.link} to={`/seamstress/${id}`}>
                    {data[id].Name}
                </Link>
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {renderDescription()}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {renderDate()}
            </TableCell>
            <TableCell align="center">{renderAction()}</TableCell>
        </TableRow>
    );
}

export default WholesaleRow;
