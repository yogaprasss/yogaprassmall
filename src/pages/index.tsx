import HomeView from '@/views/Home';

import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='yogaprassmall'
        description='Boleh, cari apa kakak?'
      />
      <HomeView />
    </>
  );
};

export default Home;
