import React, {FC, ReactNode, useReducer} from 'react';

import {createStyles, CssBaseline, makeStyles, Theme} from '@material-ui/core';
import TopNavBar from './TopNavBar';
import Navigation from './Navigation';
import clsx from 'clsx';

// define interface to represent component props
interface LayoutProps {
    toggleTheme: () => void;
    useDefaultTheme: boolean;
    children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            minHeight: 'calc(100vh - 30px)',
            background: theme.palette.background.paper,
            marginLeft: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            ...theme.mixins.toolbar,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 250,
        },
    }),
);
const Layout: FC<LayoutProps> = ({
    toggleTheme,
    useDefaultTheme,
    children,
}: LayoutProps) => {
    const classes = useStyles();
    const [open, toggle] = useReducer((open) => !open, true);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNavBar
                open={open}
                handleMenuOpen={toggle}
                toggleTheme={toggleTheme}
                useDefaultTheme={useDefaultTheme}
            />
            <Navigation open={open} handleMenuClose={toggle} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

export default Layout;
