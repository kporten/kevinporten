import type { AppProps } from 'next/app';

import Head from 'next/head';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Kevin Porten | Web Developer</title>
      <meta name="description" content="Welcome to my personal homepage" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="flex items-center justify-center lg:min-h-screen">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
