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
import SelectionFilter from './SelectionFilter';
import Banner from '../misc/Banner';

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

    const classes = useStyles();

    const [filter, setFilter] = useState('All');
    const [solidOpen, setSolidOpen] = useState(true);
    const [patriotOpen, setPatriotOpen] = useState(true);
    const [floralOpen, setFloralOpen] = useState(true);
    const [patternOpen, setPatternOpen] = useState(true);
    const [hawaiianOpen, setHawaiianOpen] = useState(true);
    const [bandanaOpen, setBandanaOpen] = useState(true);
    const [animalOpen, setAnimalOpen] = useState(true);
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
    // let custom = [];

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
    const renderCategory = (category) => {
        return category.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };
    const renderCustomItems = () => {
        return (
            <React.Fragment>
                <CustomCard />
                <DesignCard design={selection.blackelastic} key={99} />
                <DesignCard design={selection.whiteelastic} key={100} />
            </React.Fragment>
        );
    };
    const renderDesigns = () => {
        const categoryTitle = (category, handleClickEvent, state) => {
            return (
                <div className={classes.category}>
                    <Checkbox
                        onClick={() => handleClickEvent(!state)}
                        checked={state}
                        color="default"
                        className={classes.checkbox}
                        size="small"
                    />
                    <Typography
                        onClick={() => handleClickEvent(!state)}
                        variant="h4"
                        component="h2"
                        className={classes.categoryTitle}
                    >
                        {category}
                    </Typography>
                </div>
            );
        };
        const renderSolid = () => {
            if (solid.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Solid', setSolidOpen, solidOpen)}
                        <Grid container spacing={3}>
                            {solidOpen ? renderCategory(solid) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderPatriot = () => {
            if (patriot.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Patriot', setPatriotOpen, patriotOpen)}
                        <Grid container spacing={3}>
                            {patriotOpen ? renderCategory(patriot) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderBandana = () => {
            if (bandana.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Bandana', setBandanaOpen, bandanaOpen)}
                        <Grid container spacing={3}>
                            {bandanaOpen ? renderCategory(bandana) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderPattern = () => {
            if (pattern.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Pattern', setPatternOpen, patternOpen)}
                        <Grid container spacing={3}>
                            {patternOpen ? renderCategory(pattern) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderAnimal = () => {
            if (animal.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Animal', setAnimalOpen, animalOpen)}
                        <Grid container spacing={3}>
                            {animalOpen ? renderCategory(animal) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderHawaiian = () => {
            if (hawaiian.length)
                return (
                    <React.Fragment>
                        {categoryTitle(
                            'Hawaiian',
                            setHawaiianOpen,
                            hawaiianOpen
                        )}
                        <Grid container spacing={3}>
                            {hawaiianOpen ? renderCategory(hawaiian) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderFloral = () => {
            if (floral.length)
                return (
                    <React.Fragment>
                        {categoryTitle('Floral', setFloralOpen, floralOpen)}
                        <Grid container spacing={3}>
                            {floralOpen ? renderCategory(floral) : ''}
                        </Grid>
                    </React.Fragment>
                );
        };
        const renderCustom = () => {
            // if (custom.length)
            return (
                <React.Fragment>
                    {categoryTitle('Custom', setCustomOpen, customOpen)}
                    <Grid container spacing={3}>
                        {customOpen ? renderCustomItems() : ''}
                    </Grid>
                </React.Fragment>
            );
        };

        return (
            <React.Fragment>
                {filter === 'All' || filter === 'Solid' ? renderSolid() : ''}
                {filter === 'All' || filter === 'Bandana'
                    ? renderBandana()
                    : ''}
                {filter === 'All' || filter === 'Animal' ? renderAnimal() : ''}
                {filter === 'All' || filter === 'Pattern'
                    ? renderPattern()
                    : ''}
                {filter === 'All' || filter === 'Hawaiian'
                    ? renderHawaiian()
                    : ''}
                {filter === 'All' || filter === 'Floral' ? renderFloral() : ''}
                {filter === 'All' || filter === 'Patriot'
                    ? renderPatriot()
                    : ''}
                {filter === 'All' || filter === 'Custom' ? renderCustom() : ''}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <main style={{ width: '100%' }}>
                <Banner />
                <SelectionHero />
                <SelectionFilter filter={filter} setFilter={setFilter} />
                <Container className={classes.root}>
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
