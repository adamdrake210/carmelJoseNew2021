import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
      height: '100%',
      width: '100%',
    },
  },
  title: {
    padding: theme.spacing(2, 0),
    color: '#fff',
    alignItems: 'center',
    margin: '0 auto',
    fontFamily: 'Dancing Script, cursive',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
    },
  },
  info: {
    padding: theme.spacing(2, 0, 1),
    color: '#fff',
  },
  infoSecond: {
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
  boldlinks: {
    color: '#fff',
    fontWeight: 700,
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
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
    maxWidth: '300px',
    margin: theme.spacing(1),
    border: 'solid 2px #fff',
  },
  rsvpButton: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(2),
  },
  buttonLink: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '2rem',
    color: '#fff',
    borderColor: '#fff',
  },
}));

function Homepage() {
  const classes = useStyles();
  const { t, lang } = useTranslation();

  return (
    <div className={classes.content}>
      <Typography variant="h1" className={classes.title}>
        {t('homepage:h1')}
      </Typography>
      <div className={classes.imageRow}>
        {lang === 'en' ? (
          <img src="./static/IMG_4086.JPG" className={classes.image} />
        ) : (
          <img src="./../static/IMG_4086.JPG" className={classes.image} />
        )}
      </div>

      <div className={classes.rsvpButton}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/uJ3dMN8Mo6kDB1uq9"
          className={classes.buttonLink}>
          <Button variant="outlined" className={classes.button}>
            {t('homepage:rsvp')}
          </Button>
        </a>
      </div>

      <Typography variant="body1" className={classes.info}>
        {t('homepage:para1')}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        {t('homepage:para2')}
      </Typography>
      <Typography variant="body1" className={classes.info}>
        {t('homepage:para3')}
        <a href="mailto:carmel.drake@gmail.com" className={classes.boldlinks}>
          carmel.drake@gmail.com
        </a>{' '}
        {t('homepage:or')}{' '}
        <a href="mailto:jose.silveiro76@gmail.com" className={classes.boldlinks}>
          jose.silveiro76@gmail.com
        </a>
      </Typography>
    </div>
  );
}

export default Homepage;
