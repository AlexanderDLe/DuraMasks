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
    navIcon: {
        paddingTop: 4,
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

    // Dynamic Nav Styles
    const navIconStyle = {
        width: `${navMediaQuery ? '45px' : '35px'}`,
    };
    const navTitleStyle = {
        fontSize: `${navMediaQuery ? '1.15rem' : '.9rem'}`,
    };

    // Standard Navigation
    const fullNavItem = (path, label) => (
        <Link
            to={`/${path}`}
            className={classes.link}
            style={{ marginRight: '20px' }}
        >
            {label}
        </Link>
    );
    const fullNav = (
        <React.Fragment>
            {fullNavItem('selection', 'Mask Selection')}
            {fullNavItem('pricing', 'Pricing')}
        </React.Fragment>
    );

    // Responsive/Mobile Menu Functionality
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // Responsive/Mobile Navigation
    const menuNavItem = (path, label) => (
        <MenuItem onClick={handleClose}>
            <Link
                to={`/${path}`}
                className={classes.menuItem}
                style={{ marginRight: '20px' }}
            >
                {label}
            </Link>
        </MenuItem>
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
                {menuNavItem('selection', 'Mask Selection')}
                {menuNavItem('pricing', 'Pricing')}
                {menuNavItem('cart', 'Cart')}
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
                                    style={navIconStyle}
                                    className={classes.navIcon}
                                    src={FacemaskIcon}
                                    alt="Facemask Icon"
                                />
                            </Link>
                            <Typography variant="h6" className={classes.title}>
                                <Link
                                    style={navTitleStyle}
                                    className={classes.link}
                                    to="/"
                                >
                                    CA Facemasks
                                </Link>
                            </Typography>

                            {navMediaQuery ? fullNav : menuNav}
                            <Link
                                to="/cart"
                                className={classes.link}
                                style={{ marginRight: '5px' }}
                            >
                                Cart
                            </Link>
                            <Link to="/cart" className={classes.link}>
                                <ShoppingCartIcon
                                    style={{ fontSize: '1.2rem' }}
                                />
                            </Link>
                            <Link to="/cart" className={classes.cartAmount}>
                                {amount}
                            </Link>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;
