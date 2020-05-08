import { createMuiTheme } from '@material-ui/core';
// import indigo from '@material-ui/core/colors/indigo';

export const theme = createMuiTheme({
    // palette: {
    //     primary: {
    //         main: indigo[800],
    //         light: indigo[600],
    //     },
    // },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 0,
            },
        },
    },
});
