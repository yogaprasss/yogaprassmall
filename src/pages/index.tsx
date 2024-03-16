import HomeView from '@/views/Home';
import Head from 'next/head';

import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='yogaprassmall'
        description='Boleh, cari apa kakak?'
        openGraph={{
          title: 'yogaprassmall',
          description: 'Boleh, cari apa kakak?',
          images: [
            { url: 'https://yogaprassmall.vercel.app/logo.png' }
          ]
        }}
      />
      <Head>
        <meta property='og:image' content='https://yogaprassmall.vercel.app/logo.png' />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
