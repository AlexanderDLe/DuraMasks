import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    cartAmount: {
        marginLeft: '3px',
        color: 'white',
        textDecoration: 'none',
    },
}));

const Navbar = ({ amount }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link className={classes.link} to="/">
                                OC Facemasks
                            </Link>
                        </Typography>
                        <Link
                            to="/order"
                            className={classes.link}
                            style={{ marginRight: '20px' }}
                        >
                            Order Masks
                        </Link>
                        <Link
                            to="/cart"
                            className={classes.link}
                            style={{ marginRight: '5px' }}
                        >
                            Cart
                        </Link>
                        <Link to="/cart" className={classes.link}>
                            <ShoppingCartIcon style={{ fontSize: '1.2rem' }} />
                        </Link>
                        <Link to="/cart" className={classes.cartAmount}>
                            {amount}
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;
