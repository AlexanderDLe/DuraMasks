import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <div color="inherit" href="https://material-ui.com/">
                {'Copyright © '}
                CAFacemasks.com {new Date().getFullYear()} |{' '}
                <Link
                    to="/policies"
                    style={{
                        color: 'rgba(0, 0, 0, 0.54)',
                        textDecoration: 'none',
                    }}
                >
                    Refund, Customer Service, & Privacy Policy
                </Link>
            </div>{' '}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    );
}
