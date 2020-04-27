import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FacemaskIcon from '../img/FacemaskIcon.png';
import { useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
    menuIcon: {
        color: 'white',
        display: 'block',
    },
    menuItem: {
        color: 'black',
        textDecoration: 'none',
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = ({ amount }) => {
    const classes = useStyles();
    const navMediaQuery = useMediaQuery('(min-width:600px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const fullNav = (
        <React.Fragment>
            <Link
                to="/selection"
                className={classes.link}
                style={{ marginRight: '20px' }}
            >
                Mask Selection
            </Link>
            <Link
                to="/pricing"
                className={classes.link}
                style={{ marginRight: '20px' }}
            >
                Pricing
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
        </React.Fragment>
    );

    const menuNav = (
        <React.Fragment>
            <IconButton onClick={handleClick}>
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        to="/selection"
                        className={classes.menuItem}
                        style={{ marginRight: '20px' }}
                    >
                        Mask Selection
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        to="/pricing"
                        className={classes.menuItem}
                        style={{ marginRight: '20px' }}
                    >
                        Pricing
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        to="/cart"
                        className={classes.menuItem}
                        style={{ marginRight: '5px' }}
                    >
                        Cart
                    </Link>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar>
                    <Container>
                        <Toolbar>
                            <Link className={classes.link} to="/">
                                <img
                                    style={{
                                        height: 'auto',
                                        width: 45,
                                        marginRight: 4,
                                        paddingTop: 4,
                                    }}
                                    src={FacemaskIcon}
                                    alt="Facemask Icon"
                                />
                            </Link>
                            <Typography variant="h6" className={classes.title}>
                                <Link className={classes.link} to="/">
                                    CA Facemasks
                                </Link>
                            </Typography>
                            {navMediaQuery ? fullNav : menuNav}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;
