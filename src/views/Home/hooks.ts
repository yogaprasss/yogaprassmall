import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import type { ProductProps } from '@/utils/types';

const useListProductHooks = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const searchKey = useMemo(() => router.query.search, [router.query.search]);

  const fetchProducts = useCallback(async (search?: string) => {
    setIsLoading(true);
    const path = '/api/products';
    const query = search ? `?search=${search}` : '';

    await fetch(path + query)
      .then((res) => res.json() as unknown as ProductProps[])
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  const resetFilter = useCallback(() => {
    router.replace({ pathname: '/' });
  }, [router]);

  useEffect(() => {
    fetchProducts(searchKey as string ?? undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  return {
    data: {
      products,
      isLoading,
      searchKey
    },
    methods: { resetFilter }
  };
};

export default useListProductHooks;
