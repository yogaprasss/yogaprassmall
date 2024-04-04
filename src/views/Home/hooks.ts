import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import type { ProductProps } from '@/utils/types';

const useListProductHooks = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isShowNotif, setIsShowNotif] = useState(false);

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

  const onAddToCart = (product: ProductProps) => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(window.localStorage.getItem('cart') ?? '[]');
      const newCart = [...cart, product];
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      toggleNotif();
    }
  };

  const toggleNotif = useCallback(() => {
    setIsShowNotif((value) => !value);
  }, []);

  useEffect(() => {
    fetchProducts(searchKey as string ?? undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  return {
    data: {
      products,
      isLoading,
      searchKey,
      isShowNotif
    },
    methods: {
      resetFilter,
      onAddToCart,
      toggleNotif
    }
  };
};

export default useListProductHooks;
