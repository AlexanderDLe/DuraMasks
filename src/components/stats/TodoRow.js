import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TodoNum from './TodoNum';
import TableCell from '@material-ui/core/TableCell';
import ClearIcon from '@material-ui/icons/Clear';
import FallbackImage from '../../img/Logo.jpg';

const useStyles = makeStyles({
    designName: {
        cursor: 'pointer',
    },
    row: {
        position: 'relative',
    },
    icon: {
        width: 50,
        fontSize: '1.5rem',
        transition: 'all .3s',
        cursor: 'pointer',
        marginTop: 6,
    },
    test: {
        position: 'absolute',
    },
    imgBox: {
        marginTop: '-50px ',
        boxShadow: '0px 5px 8px -5px #888888',
    },
});

function TodoRow({
    data,
    row,
    updateNum,
    handleModalOpen,
    removeItem,
    rowBGColor,
}) {
    const classes = useStyles();
    const [mouseHover, setMouseHover] = useState(false);

    const hoverStyles = useMemo(() => {
        return {
            row: {
                backgroundColor: mouseHover ? '#e8f0ff' : rowBGColor,
                transition: 'all .3s',
            },
            design: {
                fontWeight: mouseHover ? 500 : 400,
                transition: 'all .3s',
            },
            icon: {
                color: mouseHover ? 'red' : 'rgba(0,0,0,.5)',
                // transform: mouseHover ? 'translateX(0px)' : 'translateX(-20px)',
            },
        };
    }, [mouseHover, rowBGColor]);

    const handleRemoveItem = () => {
        removeItem(
            data[row].Color,
            data[row].XL,
            data[row].L,
            data[row].M,
            data[row].S,
            data[row].XS,
            data[row].Total
        );
    };

    const renderImage = () => {
        const IMGFilename = data[row].Color.split(' ').join('');
        let src;
        try {
            src = require(`../../img/SmallMaskPhotos/${IMGFilename}.jpg`);
        } catch (error) {
            src = FallbackImage;
        }
        return (
            <div className={classes.imgBox}>
                <img
                    className={classes.img}
                    src={src}
                    alt="Mask"
                    style={{ width: '100%', padding: 0 }}
                />
            </div>
        );
    };

    return (
        <TableRow
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            className={classes.row}
            key={data[row].Color}
            style={hoverStyles.row}
        >
            <TableCell
                className={classes.designName}
                component="th"
                scope="row"
                onClick={() => handleModalOpen(data[row].Color)}
                style={hoverStyles.design}
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
            <TableCell align="center">
                <ClearIcon
                    className={classes.icon}
                    style={hoverStyles.icon}
                    onClick={handleRemoveItem}
                />
            </TableCell>
            <td className={classes.test}>{mouseHover ? renderImage() : ''}</td>
        </TableRow>
    );
}

export default TodoRow;
