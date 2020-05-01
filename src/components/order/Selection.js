import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import DesignCard from './DesignCard';
import CustomCard from './CustomCard';
import { selection } from '../masks/MaskDesigns';

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: 'center',
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
    },
    category: {
        display: 'flex',
    },
    categoryTitle: {
        cursor: 'pointer',
        fontSize: '1.5rem',
        marginLeft: 2,
        marginTop: 48,
        marginBottom: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        // textTransform: 'uppercase',
    },
    expandCollapse: {
        cursor: 'pointer',
        fontSize: '1.8rem',
        marginTop: 48,
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
                    <ExpandLessIcon
                        onClick={handleClickEvent}
                        className={classes.expandCollapse}
                        style={{
                            transform: `rotate(${state ? '0deg' : '180deg'})`,
                            transition: 'all .5s',
                        }}
                    />
                    <Typography
                        onClick={handleClickEvent}
                        variant="h5"
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
        <Container className={classes.root}>
            <div style={{ textAlign: 'left', paddingTop: 24 }}>
                <Typography variant="h4" component="h2">
                    Select A Design
                </Typography>
                <Typography
                    gutterBottom
                    variant="body1"
                    component="h2"
                    style={{ paddingBottom: 0, color: 'rgba(0,0,0,.6)' }}
                >
                    More designs coming soon.
                </Typography>
            </div>
            {renderDesigns()}
        </Container>
    );
}

export default Selection;
