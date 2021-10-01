import React, {useReducer} from 'react';
import {
    createTheme,
    responsiveFontSizes,
    Theme,
    ThemeProvider,
} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';

import './styles.scss';
import Layout from './components/Layout';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: blue[300],
        },
        secondary: {
            main: blue[800],
        },
    },
});
const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: blue[800],
        },
    },
});
const AppContext = React.createContext(null);
function App() {
    const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);
    // define custom theme
    let theme: Theme = createTheme(useDefaultTheme ? lightTheme : darkTheme);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    theme = responsiveFontSizes(theme);
    return (
        <AppContext.Provider value={null}>
            <ThemeProvider theme={theme}>
                <Layout
                    toggleTheme={toggle}
                    useDefaultTheme={useDefaultTheme}
                />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
