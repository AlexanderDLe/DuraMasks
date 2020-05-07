import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 24,
        width: '100%',
        backgroundColor: '#37474f',
    },
    container: {
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'space-between',
    },
    filterItem: {
        cursor: 'pointer',
        display: 'inline',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 500,
    },
}));

function SelectionFilter({ filterState, setFilterState }) {
    const classes = useStyles();

    const renderFilterItem = (name, state) => {
        let active = filterState === name ? true : false;
        return <div className={classes.filterItem}>{name}</div>;
    };

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                {renderFilterItem('All')}
                {renderFilterItem('Solid')}
                {renderFilterItem('Bandana')}
                {renderFilterItem('Patterned')}
                {renderFilterItem('Animal')}
                {renderFilterItem('Hawaiian')}
                {renderFilterItem('Floral')}
            </Container>
        </div>
    );
}

export default SelectionFilter;
