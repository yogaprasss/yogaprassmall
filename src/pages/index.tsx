import Head from 'next/head';
import HomeView from '@/views/Home';

import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      {/* <NextSeo
        title='yogaprassmall'
        description='Boleh, cari apa kakak?'
      /> */}
      <Head>
        <title>yogaprassmall</title>
        <meta name='description' content='Boleh, cari apa kakak?' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:image' content='https://yogaprassmall.vercel.app/opengraph-image.jpg' />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
