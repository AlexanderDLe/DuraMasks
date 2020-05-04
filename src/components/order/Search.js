import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 16,
    },
    searchIcon: {
        cursor: 'pointer',
    },
    searchButton: {
        border: 'none',
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

function Search({
    handleSearch,
    handleSearchTermChange,
    searchTerm,
    handleSearchReset,
}) {
    const classes = useStyles();

    return (
        <form className={classes.search} onSubmit={handleSearch}>
            <TextField
                onChange={handleSearchTermChange}
                label="Search"
                value={searchTerm}
            />
            <div
                style={{ marginTop: 24 }}
                className={classes.searchButton}
                type="submit"
            >
                <SearchIcon className={classes.searchIcon} />
            </div>
            <div
                onClick={handleSearchReset}
                className={classes.searchButton}
                style={{ marginTop: 24 }}
            >
                <CloseIcon className={classes.searchIcon} />
            </div>
        </form>
    );
}

export default Search;
