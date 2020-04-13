import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import { selection } from '../masks/MaskDesigns';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
    },
    media: {
        height: 280,
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
    },
    buttonLink: {
        textDecoration: 'none',
        color: 'white',
    },
    customizeBox: {
        paddingTop: 26,
        display: 'flex',
    },
    itemActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

function Item({ match, addOrder }) {
    const classes = useStyles();
    const data = selection[match.params.id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(data);

    const [size, setSize] = React.useState('Adult');
    const [amount, setAmount] = React.useState(1);

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography
                    className={classes.title}
                    gutterBottom
                    variant="h4"
                    component="h2"
                >
                    {data.color} Facemask
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={require(`../../img/${data.img}`)}
                title="Mask Image"
            />
            <CardContent className={classes.customizeBox}>
                <FormControl style={{ width: '50%' }} component="fieldset">
                    <FormLabel component="legend">Select Size</FormLabel>
                    <RadioGroup
                        aria-label="Mask Size"
                        name="Size"
                        value={size}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="Adult"
                            control={<Radio color="primary" />}
                            label="Adult"
                        />
                        <FormControlLabel
                            value="Child"
                            control={<Radio color="primary" />}
                            label="Child"
                        />
                        <FormControlLabel
                            value="Other"
                            control={<Radio color="primary" />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>
                <div>
                    <FormLabel style={{ paddingLeft: 5 }} component="legend">
                        Amount
                    </FormLabel>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={amount}
                        onChange={handleAmountChange}
                        style={{ paddingLeft: 5 }}
                    />
                    <br />
                    <br />
                    <Button
                        onClick={() =>
                            addOrder({
                                color: data.color,
                                size: size,
                                amount: amount,
                            })
                        }
                        size="small"
                        color="primary"
                    >
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/order" className={classes.link}>
                        Back To Selections
                    </Link>
                </Button>
                <Button variant="contained" size="small" color="primary">
                    <Link to="/cart" className={classes.buttonLink}>
                        Go To Cart
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}

export default Item;
