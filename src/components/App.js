import React from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function App() {
    return (
        <div>
            <CssBaseline />
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
