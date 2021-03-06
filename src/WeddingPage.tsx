import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '0px 0 70px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '0 0 4em',
      width: '100%',
      height: '100%',
    },
  },
  title: {
    padding: '20px 0px',
    color: '#fff',
  },
  subtitle: {
    padding: '20px 0px',
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    padding: '15px 0px 5px',
    color: '#fff',
  },
  boldtext: {
    padding: '15px 0px 5px',
    color: '#fff',
    fontWeight: 700,
  },
  iconContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: '120px',
  },
  imageRow: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    margin: '10px',
    border: 'solid 2px #fff',
  },
}));

function WeddingPage() {
  const classes = useStyles();
  const { t, lang } = useTranslation();

  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('weddingpage:weddingtitle')}
      </Typography>
      <div className={classes.imageRow}>
        {lang === 'en' ? (
          <img src="./static/weddingvenue.jpg" className={classes.image} />
        ) : (
          <img src="./../static/weddingvenue.jpg" className={classes.image} />
        )}
      </div>
      <Typography variant="body1" className={classes.text}>
        {t('weddingpage:para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('weddingpage:para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('weddingpage:para4')}
      </Typography>
    </div>
  );
}

export default WeddingPage;
