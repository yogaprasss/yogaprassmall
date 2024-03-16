// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductProps } from '@/utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>,
) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const slug = '/products';
  const searchKey = req.query.search as string;

  await fetch(baseURL + slug)
    .then((response) => response.json() as unknown as ProductProps[])
    .then((data) => {
      const filteredData = searchKey ?
        data.filter((item) => item.title.toLowerCase().includes(searchKey?.toLowerCase())) :
        data;
      res.status(200).json(filteredData)
    })
    .catch((e) => res.status(500).json(e));
}
