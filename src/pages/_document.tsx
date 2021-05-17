import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-montserrat bg-white text-trueGray-700 dark:bg-black dark:text-trueGray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
