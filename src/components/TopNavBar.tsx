import React, {FC, ReactElement} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
// import UserIcon from '@material-ui/icons/AccountCircle';
import {
    AppBar,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';

interface TopNavBarProps {
    open: boolean;
    handleMenuOpen: () => void;
    toggleTheme: () => void;
    useDefaultTheme: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: 250,
            width: '100%', // 'calc(100% - 250px)',
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
    }),
);
const TopNavBar: FC<TopNavBarProps> = ({
    open,
    handleMenuOpen,
    toggleTheme,
    useDefaultTheme,
}): ReactElement => {
    const classes = useStyles();
    return (
        <AppBar
            elevation={0}
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.title}>
                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        onClick={handleMenuOpen}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        React-17
                    </Typography>
                </div>
                <IconButton onClick={toggleTheme}>
                    {useDefaultTheme ? (
                        <Tooltip title="Switch to dark mode" placement="bottom">
                            <Brightness3Icon />
                        </Tooltip>
                    ) : (
                        <Tooltip
                            title="Switch to light mode"
                            placement="bottom">
                            <Brightness7Icon />
                        </Tooltip>
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavBar;
