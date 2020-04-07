import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Album() {
    return (
        <React.Fragment>
            <AppBar position="relative">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            OC Facemasks
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}
