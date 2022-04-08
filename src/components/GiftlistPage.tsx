import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
      fontSize: '1em',
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
  links: {
    color: '#fff',
    fontWeight: 700,
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
}));

function GiftlistPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('giftlistpage:giftlisttitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('giftlistpage:para1')}{' '}
        <a className={classes.links} target="_blank" href="https://tinyurl.com/3md57y86">
          https://tinyurl.com/3md57y86
        </a>
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('giftlistpage:para2')}
      </Typography>
    </div>
  );
}

export default GiftlistPage;
