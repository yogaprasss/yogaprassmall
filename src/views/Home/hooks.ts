import { useCallback, useEffect, useState } from 'react';

import type { ProductProps } from '@/utils/types';

const useListProductHooks = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchProducts = useCallback(async () => {
    await fetch('/api/products')
      .then((res) => res.json() as unknown as ProductProps[])
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: {
      products
    },
    methods: {}
  };
};

export default useListProductHooks;
