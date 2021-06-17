import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        </Head>
        <body className="bg-white font-montserrat text-trueGray-700 dark:bg-black dark:text-trueGray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
