import React from 'react';
import Typography from '@material-ui/core/Typography';
import MetroMap from './GoogleMaps/MetroMap';
import useTranslation from 'next-translate/useTranslation';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
  boldlinks: {
    color: '#fff',
    fontWeight: 700,
    '&:hover': {
      color: 'rgba(0,0,0, 0.5)',
    },
  },
}));

function LogisticsPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        {t('logisticspage:logisticsstitle')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para1')}
      </Typography>
      <MetroMap isMarkerShown />
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para2')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para3')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para4')}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        {t('logisticspage:para5title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para5')}
      </Typography>
      <a
        href="https://weatherspark.com/m/36848/6/Average-Weather-in-June-in-Madrid-Spain"
        className={classes.boldlinks}>
        {t('logisticspage:para6link')}
      </a>
      <Typography variant="h5" className={classes.subtitle}>
        {t('logisticspage:para7title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t('logisticspage:para7')}
      </Typography>
    </React.Fragment>
  );
}

export default LogisticsPage;
