import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import MetroMap from './GoogleMaps/MetroMap';

const useStyles = makeStyles(theme => ({
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '0px 0 70px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '0 0 4em',
      height: '100%',
      width: '100%',
    },
  },
  title: {
    padding: theme.spacing(2, 0),
    color: '#fff',
  },
  subtitle: {
    padding: theme.spacing(2, 0),
    color: '#fff',
    textDecoration: 'underline',
  },
  text: {
    padding: theme.spacing(2, 0, 1),
    color: '#fff',
  },
  hoteltext: {
    color: '#fff',
    padding: theme.spacing(0, 0, 2),
  },
  links: {
    color: '#fff',
    fontWeight: 700,
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
}));

function AccommodationPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.content}>
      <Typography variant="h4" className={classes.title}>
        {t('accommodationpage:accomtitle')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('accommodationpage:accomnotice')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('accommodationpage:weddingplace1')}
        <a href="http://antiguafabricadeharinas.com" className={classes.links} target="_blank">
          La Antigua Fábrica de Harinas.
        </a>{' '}
        {t('accommodationpage:weddingplace2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('accommodationpage:metroinfo')}
      </Typography>
      <MetroMap isMarkerShown />
      <Typography variant="body1" className={classes.text}>
        {t('accommodationpage:para1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('accommodationpage:para2')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('accommodationpage:hoteltitle')}
      </Typography>
      <Typography variant="body1" className={classes.title}>
        {t('accommodationpage:hotel1')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('accommodationpage:hotelinfo1')}{' '}
        <a
          href="https://www.booking.com/hotel/es/petit-palace-santa-barbara.es.html"
          className={classes.links}
          target="_blank">
          Booking.com
        </a>
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('accommodationpage:hotelinfo1-2')}{' '}
        <a
          href="https://www.petitpalacesantabarbara.com/"
          className={classes.links}
          target="_blank">
          Get Your Discount!
        </a>
      </Typography>

      <Typography variant="body1" className={classes.title}>
        {t('accommodationpage:hotel3')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('accommodationpage:hotelinfo3')}{' '}
        <a href="https://hotelurso.com/" className={classes.links} target="_blank">
          More Info Here
        </a>
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        {t('accommodationpage:extrahotels1')}{' '}
        <a href="https://goo.gl/maps/XueywcDsuAQ4t81WA" className={classes.links} target="_blank">
          NH Madrid Alonso Martínez
        </a>
        {t('accommodationpage:extrahotels2')}{' '}
        <a href="https://goo.gl/maps/5hwNEkXgq48zdnWF7" className={classes.links} target="_blank">
          Hotel Sardinero Madrid
        </a>
      </Typography>
    </div>
  );
}

export default AccommodationPage;
