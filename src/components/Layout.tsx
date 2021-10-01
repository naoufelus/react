import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';

class Layout extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <div>
                        <IconButton color="inherit" aria-label="open menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            React-17
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Layout;
