import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import LocalHotel from '@material-ui/icons/LocalHotel';
import LocalBar from '@material-ui/icons/LocalBar';
import Wc from '@material-ui/icons/Wc';
import Pages from '@material-ui/icons/Pages';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import PregnantWoman from '@material-ui/icons/PregnantWoman';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    color: '#53504B',
    fontSize: '30px',
  },
  avatarContainer: {
    margin: '32px auto',
  },
}));

type Props = {
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
};

function AppHeaderDrawer({ isDrawerOpen, handleDrawerToggle }: Props) {
  const classes = useStyles();
  const { t, lang } = useTranslation();

  const drawer = (
    <React.Fragment>
      <List>
        <Link href="/">
          <ListItem button>
            <Home className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:home')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/travel">
          <ListItem button>
            <FlightTakeoff className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:travel')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/accommodation">
          <ListItem button>
            <LocalHotel className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:accommodation')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/preboda">
          <ListItem button>
            <LocalBar className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:preboda')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/wedding">
          <ListItem button>
            <Wc className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:wedding')}</ListItemText>
          </ListItem>
        </Link>
        <Link href="/logistics">
          <ListItem button>
            <SwapHoriz className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:logistics')}</ListItemText>
          </ListItem>
        </Link>
        {lang === 'en' && (
          <Link href="/dresscode">
            <ListItem button>
              <PregnantWoman className={classes.icon} />
              <ListItemText>{t('appheaderdrawer:dresscode')}</ListItemText>
            </ListItem>
          </Link>
        )}
        <Link href="/giftlist">
          <ListItem button>
            <Pages className={classes.icon} />
            <ListItemText>{t('appheaderdrawer:giftlist')}</ListItemText>
          </ListItem>
        </Link>
      </List>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} />
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <div
            tabIndex={0}
            role="button"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}>
            {drawer}
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default AppHeaderDrawer;
