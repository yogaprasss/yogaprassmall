// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductProps } from '@/utils/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps>,
) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const slug = `/products/${req.query.id}`;

  await fetch(baseURL + slug)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(500).json(e));
}
