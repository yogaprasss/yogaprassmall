import Head from 'next/head';
import ProductView from '@/views/Product';

import type { ProductProps } from '@/utils/types';
import type { NextPageContext } from 'next';

const Product = ({ title, images }: ProductProps) => {
  return (
    <>
      <Head>
        <title>{title} | yogaprassmall</title>
        <meta name='description' content='Belanja murah yuk kakak!' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:image' content={images[0]} />
      </Head>
      <ProductView />
    </>
  );
};

export async function getServerSideProps({ query }: NextPageContext) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const slug = `/products/${query.id as string}`;

  const result = await fetch(baseURL + slug);
  const data = await result.json() as ProductProps;

  return { props: { ...data } };
};

export default Product;