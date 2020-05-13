import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    smallQuery: {
        display: 'flex',
        flexDirection: 'column',
    },
    customizeBox: {
        paddingTop: 16,
        display: 'flex',
    },
    spanDimensions: {
        paddingLeft: 8,
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '.8rem',
    },
    smallSpanDimensions: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '.8rem',
        paddingBottom: 12,
    },
    radioLabel: {
        color: 'black',
    },
    sizeLabel: {
        color: 'rgba(0, 0, 0, 0.54) !important',
    },
}));

function MaskOrderForm({
    navMediaQuery,
    size,
    amount,
    handleChange,
    handleAmountChange,
}) {
    const classes = useStyles();

    // Dynamic Styles
    const radioQuery = navMediaQuery ? classes.normalQuery : classes.smallQuery;
    const spanQuery = navMediaQuery
        ? classes.spanDimensions
        : classes.smallSpanDimensions;

    return (
        <CardContent className={classes.customizeBox}>
            <FormControl style={{ width: '50%' }} component="fieldset">
                <FormLabel className={classes.sizeLabel} component="legend">
                    Select Size
                </FormLabel>
                <RadioGroup
                    aria-label="Mask Size"
                    name="Size"
                    value={size}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="XL"
                        control={<Radio color="primary" />}
                        label={
                            <div className={radioQuery}>
                                XL Adult
                                <span className={spanQuery}>10.5" x 6"</span>
                            </div>
                        }
                        className={classes.radioLabel}
                    />

                    <FormControlLabel
                        value="L"
                        control={<Radio color="primary" />}
                        label={
                            <div className={radioQuery}>
                                L Adult
                                <span className={spanQuery}>10" x 5.5"</span>
                            </div>
                        }
                    />
                    <FormControlLabel
                        value="M"
                        control={<Radio color="primary" />}
                        label={
                            <div className={radioQuery}>
                                M Teen
                                <span className={spanQuery}>9" x 5"</span>
                            </div>
                        }
                    />

                    <FormControlLabel
                        value="S"
                        control={<Radio color="primary" />}
                        label={
                            <div className={radioQuery}>
                                S Child
                                <span className={spanQuery}>8" x 4.5"</span>
                            </div>
                        }
                    />

                    <FormControlLabel
                        value="XS"
                        control={<Radio color="primary" />}
                        label={
                            <div className={radioQuery}>
                                XS Child
                                <span className={spanQuery}>7" x 4"</span>
                            </div>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <div style={{ width: '50%' }}>
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
                <p style={{ color: 'rgba(0,0,0,.5', fontSize: '.85rem' }}>
                    Dimensions are in Width x Height
                    <br />
                    <br />
                    All measurements used measuring tape to follow the
                    front-facing cloth exterior.
                </p>
            </div>
        </CardContent>
    );
}

export default MaskOrderForm;
