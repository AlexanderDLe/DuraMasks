import React, { useEffect, useState } from 'react';
// import keys from '../../config/keys';
// import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 420,
        borderBottom: '2px solid #3f51b5',
    },
    header: {
        fontFamily: 'Open Sans',
    },
});

// const API = keys.salesPerMaskAPI;

let myData = [
    {
        Color: 'Paws',
        Total: '10',
    },
    {
        Color: 'Artisan Black',
        Total: '4',
    },
    {
        Color: 'Terrace',
        Total: '4',
    },
    {
        Color: 'Violet Red Zebra',
        Total: '2',
    },
    {
        Color: 'Patriot',
        Total: '3',
    },
    {
        Color: 'Pink Bandana',
        Total: '3',
    },
    {
        Color: 'Floral Rose',
        Total: '1',
    },
    {
        Color: 'Zebra',
        Total: '1',
    },
    {
        Color: 'Navy Bandana',
        Total: '6',
    },
    {
        Color: 'Radiant',
        Total: '2',
    },
    {
        Color: 'Canopy',
        Total: '1',
    },
    {
        Color: 'Buttercup',
        Total: '1',
    },
    {
        Color: 'Blossom',
        Total: '1',
    },
    {
        Color: 'Sky',
        Total: '3',
    },
    {
        Color: 'Flames',
        Total: '2',
    },
    {
        Color: 'Koi',
        Total: '5',
    },
    {
        Color: 'Orange Plaid',
        Total: '1',
    },
    {
        Color: 'Bloom',
        Total: '1',
    },
    {
        Color: 'Leopard',
        Total: '5',
    },
    {
        Color: 'Tribal',
        Total: '6',
    },
    {
        Color: 'Palms',
        Total: '2',
    },
    {
        Color: 'Vines',
        Total: '1',
    },
    {
        Color: 'Black Dotted',
        Total: '2',
    },
    {
        Color: 'White Bandana',
        Total: '3',
    },
    {
        Color: 'Black',
        Total: '12',
    },
    {
        Color: 'Celeste',
        Total: '1',
    },
    {
        Color: 'Dark Grey',
        Total: '4',
    },
    {
        Color: 'White Dotted',
        Total: '1',
    },
    {
        Color: 'Ash',
        Total: '2',
    },
    {
        Color: 'Navy Grey',
        Total: '6',
    },
    {
        Color: 'Native',
        Total: '1',
    },
    {
        Color: 'Floral Green',
        Total: '1',
    },
    {
        Color: 'Magnetic',
        Total: '2',
    },
    {
        Color: 'Hula',
        Total: '2',
    },
    {
        Color: 'Spring',
        Total: '5',
    },
    {
        Color: 'Floral Pink',
        Total: '1',
    },
    {
        Color: 'River',
        Total: '3',
    },
    {
        Color: 'Garden',
        Total: '4',
    },
    {
        Color: 'Floral Burgundy',
        Total: '2',
    },
    {
        Color: 'Floral White',
        Total: '7',
    },
    {
        Color: 'Purple Plaid',
        Total: '1',
    },
    {
        Color: 'Sutra',
        Total: '1',
    },
    {
        Color: 'Cherries',
        Total: '1',
    },
    {
        Color: 'Minnie',
        Total: '2',
    },
    {
        Color: 'White',
        Total: '2',
    },
    {
        Color: 'Blue Bandana',
        Total: '4',
    },
    {
        Color: 'Artisan Red',
        Total: '1',
    },
    {
        Color: 'Black Bandana',
        Total: '7',
    },
    {
        Color: 'Loft',
        Total: '1',
    },
    {
        Color: 'Pink',
        Total: '4',
    },
    {
        Color: 'Floral Blue',
        Total: '5',
    },
    {
        Color: 'Stem',
        Total: '1',
    },
    {
        Color: 'Beach',
        Total: '4',
    },
    {
        Color: 'Navy Blue',
        Total: '8',
    },
    {
        Color: 'Grey',
        Total: '5',
    },
    {
        Color: 'Surf',
        Total: '4',
    },
    {
        Color: 'Pond',
        Total: '2',
    },
    {
        Color: 'Sunset',
        Total: '5',
    },
];

const Stats = () => {
    let [stats, setStats] = useState(myData);

    useEffect(() => {
        window.scrollTo(0, 0);
        // async function fetchData() {
        //     try {
        //         const response = await axios.get(API);
        //         setStats(response.data);
        //     } catch (error) {
        //         console.log(error);
        //         setStats([]);
        //     }
        // }
        // fetchData();
    }, []);
    const classes = useStyles();
    console.log(stats, setStats);

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography
                    className={classes.header}
                    variant="h4"
                    component="h2"
                >
                    Stats
                </Typography>
            </CardContent>

            <CardContent style={{ paddingTop: 0, paddingBottom: 20 }}>
                Your order was successful.
            </CardContent>
        </Card>
    );
};

export default Stats;
