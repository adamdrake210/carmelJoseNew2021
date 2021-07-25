import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Whiteflower from 'components/svgs/Whiteflower';
// import { initGA, logPageView } from '../utils/analytics';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '56px',
    '@media (min-width:0px) and (orientation: landscape)': {
      paddingTop: '48px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '64px',
    },
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    alignItems: 'flex-start',
    display: 'flex',
    padding: '25px 0 100px',
    flexDirection: 'column',
    width: '900px',
    fontFamily: theme.typography.fontFamily,
    margin: '0 auto 4em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '4em 2em',
      paddingTop: '1em',
      height: '100%',
    },
  },
}));

type Props = {
  children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  const classes = useStyles();

  // useEffect(() => {
  //   if (!window.GA_INITIALIZED) {
  //     initGA();
  //     window.GA_INITIALIZED = true;
  //   }
  //   logPageView();
  // }, []);

  return (
    <Grid container className={classes.root}>
      <Whiteflower />
      <div className={classes.content}>{children}</div>
    </Grid>
  );
}

export default PageLayout;
