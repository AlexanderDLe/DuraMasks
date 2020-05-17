import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 850,
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

function Policies() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Card className={classes.root} elevation={3}>
            <h3>Refund Policy</h3>
            <p>
                Due to the hazardous nature of used/handled facemasks, we do not
                offer refunds.
            </p>
            <h3>Customer Service Policy</h3>
            <p>
                If you have questions or comments about this policy, you may
                email us at contact@cafacemasks.com.
            </p>
            <h3>Privacy Policy</h3>
            <p>
                Thank you for choosing to be part of our community at CA
                Facemasks. We are committed to protecting your personal
                information and your right to privacy. If you have any questions
                or concerns about our notice, or our practices with regards to
                your personal information, please contact us at
                contact@cafacemasks.com.
                <br />
                <br />
                In this privacy notice, we seek to explain to you in the
                clearest way possible what information we collect. Please read
                this privacy notice carefully as it will help you make informed
                decisions about sharing your personal information with us.
            </p>
            <h3>What information do we collect?</h3>
            <p>
                We only take information regarding your order and shipping
                information to fulfill your order. Any payment information is
                handled solely by Paypal thus sensitive information is never
                exposed.
            </p>
            <h3>Will your information be shared with anyone?</h3>
            <p>
                We only use information with your consent to comply with laws
                and to provide you with your ordered products.
            </p>
            <h3>How long do we keep your information?</h3>
            <p>
                We keep your information for as long as necessary to fulfill the
                purposes outlined in this privacy notice unless otherwise
                required by law
            </p>
            <h3>Do we collect information from minors?</h3>
            <p>
                We do not knowingly collect data from or market to children
                under 18 years of age.
            </p>

            <h3>How can you contact us about this policy?</h3>
            <p>
                If you have questions or comments about this policy, you may
                email us at contact@cafacemasks.com
            </p>
        </Card>
    );
}

export default Policies;
