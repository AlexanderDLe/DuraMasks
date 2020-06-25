import React, { useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox';
import DesignCard from './DesignCard';
import CustomCard from './CustomCard';
import { selection } from '../masks/MaskDesigns';
import Search from './Search';
import SelectionHero from './SelectionHero';
import SelectionFilter from './SelectionFilter';
// import Banner from '../misc/Banner';
import RenderCategory from './RenderCategory';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
    },
    smallContainer: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    root: {
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

const searchThroughSelection = (searchTerm) => {
    let selectionResults = [];
    Object.keys(selection).forEach((key) => {
        if (searchTerm === '') return selectionResults.push(selection[key]);
        else {
            let term = searchTerm.toLowerCase();
            let name = selection[key].color.toLowerCase();
            let catg = selection[key].category.toLowerCase();
            let tags = selection[key].tags;

            if (name.includes(term) || catg.includes(term)) {
                return selectionResults.push(selection[key]);
            }
            for (let tag of tags) {
                if (tag.toLowerCase().includes(term)) {
                    return selectionResults.push(selection[key]);
                }
            }
        }
    });
    return selectionResults;
};

function Selection() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navMediaQuery = useMediaQuery('(min-width:900px)');

    const classes = useStyles();

    const [filter, setFilter] = useState('All');
    const [customOpen, setCustomOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Categories
    let solid = [];
    let patriot = [];
    let bandana = [];
    let pattern = [];
    let animal = [];
    let hawaiian = [];
    let floral = [];

    // Categorization
    const sortCategories = (selectionToSort) => {
        selectionToSort.forEach((item) => {
            let category = item.category;
            switch (category) {
                case 'solid':
                    solid.push(item);
                    break;
                case 'patriot':
                    patriot.push(item);
                    break;
                case 'floral':
                    floral.push(item);
                    break;
                case 'pattern':
                    pattern.push(item);
                    break;
                case 'hawaiian':
                    hawaiian.push(item);
                    break;
                case 'animal':
                    animal.push(item);
                    break;
                case 'bandana':
                    bandana.push(item);
                    break;
                default:
                    break;
            }
        });
    };

    const searchResults = searchThroughSelection(searchTerm);
    sortCategories(searchResults);

    // Search
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Render
    const renderDesigns = () => {
        const renderCustom = () => {
            const renderCustomItems = () => {
                return (
                    <React.Fragment>
                        <CustomCard />
                        <DesignCard
                            design={selection.blackelastic}
                            key={1000}
                        />
                        <DesignCard
                            design={selection.whiteelastic}
                            key={1001}
                        />
                    </React.Fragment>
                );
            };
            return (
                <React.Fragment>
                    <div className={classes.category}>
                        <Checkbox
                            onClick={() => setCustomOpen(!customOpen)}
                            checked={customOpen}
                            color="default"
                            className={classes.checkbox}
                            size="small"
                        />
                        <Typography
                            onClick={() => setCustomOpen(!customOpen)}
                            variant="h4"
                            component="h2"
                            className={classes.categoryTitle}
                        >
                            Custom
                        </Typography>
                    </div>
                    <Grid container spacing={2}>
                        {customOpen ? renderCustomItems() : ''}
                    </Grid>
                </React.Fragment>
            );
        };

        return (
            <React.Fragment>
                <RenderCategory
                    categoryName={'Bandana'}
                    categoryItems={bandana}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Floral'}
                    categoryItems={floral}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Animal'}
                    categoryItems={animal}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Pattern'}
                    categoryItems={pattern}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Solid'}
                    categoryItems={solid}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Hawaiian'}
                    categoryItems={hawaiian}
                    filterState={filter}
                />
                <RenderCategory
                    categoryName={'Patriot'}
                    categoryItems={patriot}
                    filterState={filter}
                />
                {filter === 'All' || filter === 'Custom' ? renderCustom() : ''}
            </React.Fragment>
        );
    };

    const selectionPadding = useMemo(() => {
        return navMediaQuery
            ? { paddingTop: '24px', paddingBottom: '24px' }
            : {};
    }, [navMediaQuery]);

    return (
        <React.Fragment>
            <main className={classes.main}>
                {/* <Banner /> */}
                <SelectionHero />
                <SelectionFilter filter={filter} setFilter={setFilter} />
                <Container className={classes.root} style={selectionPadding}>
                    <Search
                        searchTerm={searchTerm}
                        handleSearchTermChange={handleSearchTermChange}
                    />
                    {renderDesigns()}
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Selection;
