import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';
import DesignCard from './DesignCard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
    showMoreDiv: {
        textAlign: 'center',
        marginTop: 32,
    },
    showMoreButton: {
        borderRadius: 3,
    },
}));

export default ({ categoryName, categoryItems, filterState }) => {
    const classes = useStyles();

    const [categoryOpen, setCategoryOpen] = useState(true);
    const [showMore, setShowMore] = useState(true);

    const renderCategory = (category) => {
        let itemsToShow;
        if (showMore) {
            itemsToShow = category.slice(0, 8);
        } else {
            itemsToShow = category;
        }
        console.log(itemsToShow);
        return itemsToShow.map((design, index) => {
            return <DesignCard design={design} key={index} />;
        });
    };

    const showMoreButton = (
        <div className={classes.showMoreDiv}>
            <Button
                className={classes.showMoreButton}
                // variant="contained"
                size="medium"
                onClick={() => setShowMore(!showMore)}
                elevation={0}
            >
                Show {showMore ? 'More' : 'Less'}
            </Button>
        </div>
    );

    if (filterState === categoryName || filterState === 'All') {
        return (
            <React.Fragment>
                <div className={classes.category}>
                    <Checkbox
                        onClick={() => setCategoryOpen(!categoryOpen)}
                        checked={categoryOpen}
                        color="default"
                        className={classes.checkbox}
                        size="small"
                    />
                    <Typography
                        onClick={() => setCategoryOpen(!categoryOpen)}
                        variant="h4"
                        component="h2"
                        className={classes.categoryTitle}
                    >
                        {categoryName}
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    {categoryOpen ? renderCategory(categoryItems) : ''}
                </Grid>
                {categoryOpen && categoryItems.length > 8 ? showMoreButton : ''}
            </React.Fragment>
        );
    } else {
        return '';
    }
};
