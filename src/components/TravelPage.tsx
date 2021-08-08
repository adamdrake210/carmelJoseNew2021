import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';

const useStyles = makeStyles(theme => ({
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
  boldtext: {
    padding: theme.spacing(2, 0, 1),
    color: '#fff',
    fontWeight: 700,
  },
}));

function Travelpage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        {t('travelpage:traveltitle')}
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        {t('travelpage:travelnotice')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('travelpage:flightstitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('travelpage:flightsinfo1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('travelpage:flightsinfo2')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('travelpage:gettingtitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('travelpage:gettinginfo1')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('travelpage:gettinginfo2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('travelpage:gettinginfo3')}
      </Typography>
      <Typography variant="body1" className={classes.boldtext}>
        {t('travelpage:moreinfo')}
      </Typography>
    </React.Fragment>
  );
}

export default Travelpage;
