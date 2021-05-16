import type { AppProps } from 'next/app';

import Head from 'next/head';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Kevin Porten | Web Developer</title>
      <meta name="description" content="Welcome to my personal homepage" />
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      />
    </Head>
    <div className="h-screen flex justify-center items-center px-4">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;