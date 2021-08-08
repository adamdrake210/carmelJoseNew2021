import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* Pass pageContext to the _document though the renderPage enhancer
            to render collected styles on server side. */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

// TODO
// Google Analytics
// Update styles to use theme.spacing
// Mobile hamburger styles
// iPad nav working?
// bug! when refreshing page it throws error - find out why
