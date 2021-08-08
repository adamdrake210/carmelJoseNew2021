import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        {'\u00A9'}
        {` ${new Date().getFullYear()}`} Carmel & Jose
      </Typography>
    </footer>
  );
}

export default Footer;
