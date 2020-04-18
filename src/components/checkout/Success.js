import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 420,
        borderBottom: '2px solid #3f51b5',
    },
    link: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const Success = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Success!
                </Typography>
            </CardContent>

            <CardContent style={{ paddingTop: 0, paddingBottom: 20 }}>
                Thank you for your purchase.
            </CardContent>
            <CardActions className={classes.itemActions}>
                <Button
                    style={{ display: 'block' }}
                    size="small"
                    color="primary"
                >
                    <Link to="/selection" className={classes.link}>
                        View Selections
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Success;
