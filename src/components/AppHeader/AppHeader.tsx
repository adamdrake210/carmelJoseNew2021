import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import setLanguage from 'next-translate/setLanguage';

import Router from 'next/router';
import NProgress from 'nprogress';
import AppHeaderDrawer from './AppHeaderDrawer';
import DesktopNavigation from './DesktopNavigation';

// @ts-ignore
Router.onRouteChangeStart = () => {
  NProgress.start();
};
// @ts-ignore
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
// @ts-ignore
Router.onRouteChangeError = () => {
  NProgress.done();
};

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    zIndex: theme.zIndex.drawer + 1,
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1em',
    },
  },
  flag: {
    width: '32px',
  },
}));

function AppHeader() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <Button onClick={async () => await setLanguage('es')}>
              <img className={classes.flag} src="./../static/es.png" />
            </Button>
            <Button onClick={async () => await setLanguage('en')}>
              <img className={classes.flag} src="./../static/en.png" />
            </Button>
          </div>
          <Hidden smDown implementation="css">
            <DesktopNavigation />
            <div className={classes.grow} />
          </Hidden>
          <Hidden mdUp implementation="css">
            <Box display="flex" height="100%" justifyContent="center" alignItems="center">
              <Link href="/">
                <Typography variant="h5">The Wedding</Typography>
              </Link>
              <div className={classes.grow} />
              <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>

      <AppHeaderDrawer isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
}

export default AppHeader;
