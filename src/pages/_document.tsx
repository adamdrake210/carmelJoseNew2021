import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import theme from '../theme';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Dancing+Script|Karla|Varela+Round"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script
            type="text/javascript"
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            async
            defer
          /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
