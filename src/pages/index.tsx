import Head from 'next/head';
import HomeView from '@/views/Home';

const Home = () => {
  return (
    <>
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
