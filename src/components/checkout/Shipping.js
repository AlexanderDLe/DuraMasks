import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 420,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
    },

    link: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    nameFields: { display: 'flex', justifyContent: 'space-between' },
    nameField: { width: '48%' },
});

const Shipping = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Shipping
                </Typography>
            </CardContent>

            <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <div className={classes.nameFields}>
                        <TextField
                            className={classes.nameField}
                            id="outlined-basic"
                            label="First Name"
                        />
                        <TextField
                            className={classes.nameField}
                            id="outlined-basic"
                            label="Last Name"
                        />
                    </div>
                    <TextField
                        className={classes.nameField}
                        id="outlined-basic"
                        label="Street Address"
                        style={{ width: '100%' }}
                    />
                    <TextField
                        className={classes.nameField}
                        id="outlined-basic"
                        label="City"
                        style={{ width: '100%' }}
                    />
                </form>
            </CardContent>

            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/cart" className={classes.link}>
                        Back to Cart
                    </Link>
                </Button>
                <Button variant="contained" size="small" color="primary">
                    Pay With Payal
                </Button>
            </CardActions>
        </Card>
    );
};

export default Shipping;
