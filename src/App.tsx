import {createTheme} from '@material-ui/core';
import {blue, pink} from '@material-ui/core/colors';
import React from 'react';
import TopNavBar from './components/TopNavBar';

import './styles.scss';

function App() {
    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: pink[300],
            },
            secondary: {
                main: blue[800],
            },
        },
    });
    return (
        <div className="jss1">
            <TopNavBar
                open={true}
                useDefaultTheme={true}
                toggleTheme={() => darkTheme}
                handleMenuOpen={null}
            />
        </div>
    );
}

export default App;
