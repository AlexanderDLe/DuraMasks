import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '24px 8px',
        width: '100%',
        backgroundColor: '#37474f',
    },
    container: {
        maxWidth: 600,
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
                {renderFilterItem('Pattern')}
                {renderFilterItem('Animal')}
                {renderFilterItem('Hawaiian')}
                {renderFilterItem('Floral')}
                {renderFilterItem('Custom')}
            </div>
        );
    };

    // const sub600 = () => {
    //     return (
    //         <div
    //             style={{
    //                 width: '100%',
    //                 maxWidth: '350px',
    //                 flexDirection: 'column',
    //             }}
    //         >
    //             <div className={classes.halfContainer}>
    //                 {renderFilterItem('All')}
    //                 {renderFilterItem('Solid')}
    //                 {renderFilterItem('Bandana')}
    //                 {renderFilterItem('Pattern')}
    //             </div>
    //             <div className={classes.halfContainer}>
    //                 {renderFilterItem('Animal')}
    //                 {renderFilterItem('Hawaiian')}
    //                 {renderFilterItem('Floral')}
    //                 {renderFilterItem('Custom')}
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                {navMediaQuery ? over600() : ''}
            </Container>
        </div>
    );
}

export default SelectionFilter;
