import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#37474f',
    },
    container: {
        maxWidth: 680,
        display: 'flex',
        justifyContent: 'center',
    },
    filterItem: {
        position: 'relative',
        cursor: 'pointer',
        display: 'inline',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 500,
        padding: 4,
    },
    underline: {
        position: 'absolute',
        height: '2px',
        backgroundColor: 'white',
        top: '25px',
        left: '0',
        width: '0%',
        opacity: 0,
        transition: 'all .5s',
    },
    halfContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    fullContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowPos: {
        color: 'white',
    },
}));

function SelectionFilter({ filter, setFilter }) {
    const classes = useStyles();
    const navMediaQuery = useMediaQuery('(min-width:600px)');

    const renderFilterItem = (name) => {
        let active = filter === name ? true : false;
        return (
            <div onClick={() => setFilter(name)} className={classes.filterItem}>
                {name}
                <div
                    className={classes.underline}
                    style={{
                        width: `${active ? '100%' : '0'}`,
                        opacity: `${active ? 1 : '0'}`,
                    }}
                ></div>
            </div>
        );
    };

    const over600 = () => {
        return (
            <div className={classes.fullContainer}>
                {renderFilterItem('All')}
                {renderFilterItem('Solid')}
                {renderFilterItem('Bandana')}
                {renderFilterItem('Animal')}
                {renderFilterItem('Floral')}
                {renderFilterItem('Pattern')}
                {renderFilterItem('Hawaiian')}
                {renderFilterItem('Patriot')}
                {renderFilterItem('Custom')}
            </div>
        );
    };

    const rootStyle = useMemo(() => {
        return navMediaQuery
            ? { padding: '24px 8px' }
            : { padding: '16px 8px 8px 8px' };
    }, [navMediaQuery]);

    const arrowStyle = useMemo(() => {
        return {
            fontSize: '2rem',
        };
    }, []);

    const under600 = () => {
        return (
            <div className={classes.arrowPos}>
                <KeyboardArrowDownIcon
                    className="arrow bounce"
                    style={arrowStyle}
                />
            </div>
        );
    };

    return (
        <div className={classes.root} style={rootStyle}>
            <Container className={classes.container}>
                {navMediaQuery ? over600() : under600()}
            </Container>
        </div>
    );
}

export default SelectionFilter;
