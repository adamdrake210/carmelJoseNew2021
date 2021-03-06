import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    padding: '0',
    height: '64px',
  },
  buttonNav: {
    width: 'unset',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255,152,0, 0.2)',
    },
  },
}));

function DesktopNavigation() {
  const classes = useStyles();
  const { t, lang } = useTranslation();

  return (
    <List className={classes.nav}>
      <Link href="/">
        <ListItem className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:home')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/travel">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:travel')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/accommodation">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:accommodation')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/preboda">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:preboda')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/wedding">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:wedding')}</ListItemText>
        </ListItem>
      </Link>
      <Link href="/logistics">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:logistics')}</ListItemText>
        </ListItem>
      </Link>
      {lang === 'en' && (
        <Link href="/dresscode">
          <ListItem button className={classes.buttonNav}>
            <ListItemText>{t('appheaderdrawer:dresscode')}</ListItemText>
          </ListItem>
        </Link>
      )}
      <Link href="/giftlist">
        <ListItem button className={classes.buttonNav}>
          <ListItemText>{t('appheaderdrawer:giftlist')}</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
}

export default DesktopNavigation;
