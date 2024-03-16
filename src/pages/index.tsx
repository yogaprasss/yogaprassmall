import HomeView from '@/views/Home';

import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='yogaprassmall'
        description='Boleh, cari apa kakak?'
        openGraph={{
          title: 'yogaprassmall',
          description: 'Boleeeeh, cari apa kakak?',
          images: [
            { url: 'https://yogaprassmall.vercel.app/logo.png' }
          ]
        }}
      />
      <HomeView />
    </>
  );
};

export default Home;
