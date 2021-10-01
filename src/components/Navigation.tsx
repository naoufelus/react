import clsx from 'clsx';
import {
    createStyles,
    makeStyles,
    Theme,
    IconButton,
    Drawer,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React from 'react';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: 250,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: 250,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 70%);`,
        },
    }),
);

// define interface to represent component props
interface NavigationProps {
    open: boolean;
    handleMenuClose: () => void;
}

const Navigation = ({open, handleMenuClose}: NavigationProps) => {
    const classes = useStyles();
    return (
        <Drawer
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <div className={classes.toolbar}>
                <IconButton onClick={handleMenuClose}>
                    <ChevronLeftIcon htmlColor="#fff" />
                </IconButton>
            </div>
            <Header title="Test" />
        </Drawer>
    );
};

export default Navigation;
