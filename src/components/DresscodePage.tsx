import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(theme => ({
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: theme.spacing(0, 0, 9),
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(0, 0, 4),
      width: '100%',
    },
  },
  title: {
    padding: theme.spacing(2, 0),
    color: '#fff',
  },
  subtitle: {
    padding: theme.spacing(2, 0, 0),
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    padding: theme.spacing(2, 0, 1),
    color: '#fff',
  },
}));

function DresscodePage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('dresscodepage:dresscodetitle')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('dresscodepage:para1title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('dresscodepage:para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('dresscodepage:para2')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('dresscodepage:para4title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('dresscodepage:para4')}
      </Typography>
    </div>
  );
}

export default DresscodePage;
