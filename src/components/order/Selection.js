import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import DesignCard from './DesignCard';
import CustomCard from './CustomCard';
import { selection } from '../masks/MaskDesigns';
import FlowerTitle from '../../img/FlowerTitle.png';

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: 'center',
    },
    smallContainer: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
    },
    category: {
        margin: '24px 0',
        marginTop: 48,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryTitle: {
        fontSize: '1.8rem',
        cursor: 'pointer',
        fontWeight: '400',
    },
    expandCollapse: {
        cursor: 'pointer',
        fontSize: '1.25rem',
        marginLeft: 8,
    },
    checkbox: {
        color: 'rgba(0, 0, 0, 0.87)',
        marginLeft: -10,
    },
    selectionTitle: {
        fontFamily: 'Roboto',
    },
}));

function Selection() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [solidOpen, setSolidOpen] = useState(true);
    const [floralOpen, setFloralOpen] = useState(true);
    const [patternOpen, setPatternOpen] = useState(true);
    const [hawaiianOpen, setHawaiianOpen] = useState(true);
    const [customOpen, setCustomOpen] = useState(true);

    const handleSolidOpens = () => {
        setSolidOpen(!solidOpen);
    };
    const handleFloralOpens = () => {
        setFloralOpen(!floralOpen);
    };
    const handlePatternOpens = () => {
        setPatternOpen(!patternOpen);
    };
    const handleHawaiianOpens = () => {
        setHawaiianOpen(!hawaiianOpen);
    };
    const handleCustomOpens = () => {
        setCustomOpen(!customOpen);
    };

    // Categorization
    const solid = [];
    const floral = [];
    const pattern = [];
    const hawaiian = [];

    const sortCategories = () => {
        Object.keys(selection).map((key) => {
            let category = selection[key].category;
            switch (category) {
                case 'solid':
                    solid.push(selection[key]);
                    break;
                case 'floral':
                    floral.push(selection[key]);
                    break;
                case 'pattern':
                    pattern.push(selection[key]);
                    break;
                case 'hawaiian':
                    hawaiian.push(selection[key]);
                    break;
                default:
                    break;
            }
            return '';
        });
    };
    sortCategories();

    const renderCategory = (category) => {
        return category.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    const renderDesigns = () => {
        const categoryTitle = (category, handleClickEvent, state) => {
            return (
                <div className={classes.category}>
                    <Checkbox
                        onClick={handleClickEvent}
                        checked={state}
                        color="default"
                        className={classes.checkbox}
                    />
                    <Typography
                        onClick={handleClickEvent}
                        variant="h4"
                        component="h2"
                        className={classes.categoryTitle}
                    >
                        {category}
                    </Typography>
                </div>
            );
        };

        return (
            <React.Fragment>
                {categoryTitle('Solid', handleSolidOpens, solidOpen)}
                <Grid container spacing={3}>
                    {solidOpen ? renderCategory(solid) : ''}
                </Grid>
                {categoryTitle('Patterned', handlePatternOpens, patternOpen)}
                <Grid container spacing={3}>
                    {patternOpen ? renderCategory(pattern) : ''}
                </Grid>
                {categoryTitle('Hawaiian', handleHawaiianOpens, hawaiianOpen)}
                <Grid container spacing={3}>
                    {hawaiianOpen ? renderCategory(hawaiian) : ''}
                </Grid>
                {categoryTitle('Floral', handleFloralOpens, floralOpen)}
                <Grid container spacing={3}>
                    {floralOpen ? renderCategory(floral) : ''}
                </Grid>
                {categoryTitle('Custom', handleCustomOpens, customOpen)}
                <Grid container spacing={3}>
                    {customOpen ? <CustomCard /> : ''}
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <main style={{ width: '100%' }}>
                <div className="selection-hero"></div>
                <Container className={classes.root}>
                    <div
                        className="selection-title"
                        style={{ textAlign: 'center', paddingTop: 24 }}
                    >
                        <img
                            className="selection-title-flower"
                            src={FlowerTitle}
                            alt="Flower Title PNG"
                        />
                        <Typography
                            className={classes.selectionTitle}
                            variant="h4"
                            component="h2"
                        >
                            Mask Selection
                        </Typography>
                        {/* <Typography
                            gutterBottom
                            variant="body1"
                            component="h2"
                            style={{
                                paddingBottom: 0,
                                color: 'rgba(0,0,0,.6)',
                            }}
                        >
                            More designs coming soon.
                        </Typography> */}
                    </div>
                    {renderDesigns()}
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Selection;
