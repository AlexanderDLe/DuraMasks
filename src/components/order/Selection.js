import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import DesignCard from './DesignCard';
import CustomCard from './CustomCard';
import { selection } from '../masks/MaskDesigns';
import Search from './Search';
import SelectionHero from './SelectionHero';

const useStyles = makeStyles((theme) => ({
    smallContainer: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    root: {
        paddingTop: '24px',
        paddingBottom: '24px',
        minHeight: 'calc(100vh - 630px)',
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
        fontFamily: 'Open Sans',
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
    sectionTitle: {
        fontFamily: 'Open Sans',
    },
    controlBox: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
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
    const [searchTerm, setSearchTerm] = useState('');
    const [useSearchTerm, setUseSearchTerm] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    // Categorization
    const solid = [];
    const floral = [];
    const pattern = [];
    const hawaiian = [];

    // Handlers
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
    const handleSearchReset = () => {
        setSearchTerm('');
        setUseSearchTerm(false);
        setSearchResults([]);
    };

    // Categorization
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

    // Search
    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm === '') setUseSearchTerm(false);
        else {
            let newSearchResults = [];
            Object.keys(selection).filter((key) => {
                let term = searchTerm.toLowerCase();
                let name = selection[key].color.toLowerCase();
                let type = selection[key].category.toLowerCase();
                let tags = selection[key].tags;

                if (name.includes(term) || type.includes(term)) {
                    return newSearchResults.push(selection[key]);
                }
                for (let tag of tags) {
                    if (tag.includes(term))
                        return newSearchResults.push(selection[key]);
                }
                return '';
            });
            console.log(newSearchResults);
            setSearchResults(newSearchResults);
            setUseSearchTerm(true);
        }
    };
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Render Designs
    const renderCategory = (category) => {
        return category.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };
    const renderSearchResults = () => {
        console.log('hello');
        console.log(searchResults);
        return (
            <React.Fragment>
                <div className={classes.category}>
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.categoryTitle}
                    >
                        Search Results
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    {searchResults.length === 0 ? (
                        <span style={{ padding: 13 }}>
                            Your search has no matches
                        </span>
                    ) : (
                        renderCategory(searchResults)
                    )}
                </Grid>
            </React.Fragment>
        );
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
                        size="small"
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
                {/* <div className="selection-hero"></div> */}
                <SelectionHero />

                <Container className={classes.root}>
                    <div
                        className="selection-title"
                        style={{ textAlign: 'center', paddingTop: 24 }}
                    >
                        <Typography
                            className={classes.sectionTitle}
                            variant="h4"
                            component="h2"
                        >
                            Select A Design
                        </Typography>
                    </div>
                    <Search
                        handleSearchReset={handleSearchReset}
                        searchTerm={searchTerm}
                        handleSearchTermChange={handleSearchTermChange}
                        handleSearch={handleSearch}
                    />
                    {useSearchTerm ? renderSearchResults() : renderDesigns()}
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Selection;
