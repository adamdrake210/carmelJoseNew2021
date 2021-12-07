import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

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
        <Trans
          i18nKey="accommodationpage:hotelinfo1"
          components={[
            <a
              className={classes.links}
              target="_blank"
              href="https://www.petitpalacesantabarbara.com/es/"
            />,
            <b />,
          ]}
        />
      </Typography>

      <Typography variant="body1" className={classes.title}>
        {t('accommodationpage:hotel3')}
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        <Trans
          i18nKey="accommodationpage:hotelinfo3"
          components={[
            <a
              className={classes.links}
              target="_blank"
              href="https://www.hoteloneshotfortuny07.com/"
            />,
            <b />,
          ]}
        />
      </Typography>
      <Typography variant="body1" className={classes.hoteltext}>
        <Trans
          i18nKey="accommodationpage:extrahotels1"
          components={[
            <a
              className={classes.links}
              target="_blank"
              href="https://www.nh-hoteles.es/booking/step1-rates?fini=26/12/2021&fout=27/12/2021&nchilds1=0&nadults1=2&hotelId=ESMD.EMBAJ&divisa=EUR&roomcode=STDDBL&rateplan=SD1_7-14D&regimen=14"
            />,
            <a
              className={classes.links}
              target="_blank"
              href="https://www.hotelsardineromadrid.com/bookingstep1/?idtokenprovider=100376568&checkin=20%2F12%2F2021&nights=1&lang=es&hsri=02040&adults=2&children=0&ages=&babies=0&googlecrawler=false&utm_source=hotelfinder&utm_medium=cpa&utm_campaign=GHACP&bookingSource=GoogleCPA&currency=EUR&rates=NzczMXwyNTIwOHwxNjA2NTNiMHw4MTE4fDIxNzEzMQ"
            />,
          ]}
        />
      </Typography>
    </div>
  );
}

export default AccommodationPage;
