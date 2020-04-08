import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
}));

export default function Album() {
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
                            color="inherit"
                            style={{ marginRight: '15px' }}
                        >
                            Order Masks
                        </Link>
                        {/* <Button color="inherit">Learn More</Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
