import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 750,
        borderBottom: '2px solid #3f51b5',
        padding: 16,
        margin: 24,
        marginTop: 40,
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

function FAQ() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Card className={classes.root} elevation={3}>
            <h2>Frequently Asked Questions</h2>
            <hr />
            <h5>Are these masks washable?</h5>
            <p>
                Yes, we recommend hand washing with cold water then hanging to
                air dry. Avoid using heat as heat may shrink certain fabric.
            </p>

            <h5>How much does shipping cost?</h5>
            <p>Shipping is absolutely free in the US.</p>

            <h5>How long will it take for the masks to be delivered?</h5>
            <p>Delivery will be between 5-9 business days.</p>

            <h5>What are these masks made of? How many layers?</h5>
            <p>
                These masks are composed of tightly-woven cotton and a non-woven
                polyester blend to ensure thickness. There are a total layers of
                4 layers for each mask.
            </p>

            <h5>Where are these masks made?</h5>
            <p>All masks are made in Anaheim, California.</p>

            <h5>Do the masks come with elastic?</h5>
            <p>Yes, all masks come with elastic that loop around the ears.</p>

            <h5>How do you know what size to get?</h5>
            <p>
                There are size dimensions (Width x Height in inches) available
                on each product page. Select a size that would best suit you.
            </p>

            <h5>Is there a nose clip?</h5>
            <p>Yes, each mask contains a nose clip.</p>
        </Card>
    );
}

export default FAQ;
