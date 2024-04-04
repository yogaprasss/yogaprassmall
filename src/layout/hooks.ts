import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import type { ChangeEvent, FormEvent } from 'react';
import type { ProductProps } from '@/utils/types';

const useLayoutHooks = () => {
  const router = useRouter();

  const [isShowSearch, setIsShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [carts, setCarts] = useState<ProductProps[]>([]);
  const [isShowCartDetail, setIsShowCartDetail] = useState(false);

  const toggleSearch = useCallback(() => setIsShowSearch((value) => !value), []);

  const onInputSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const onSubmitSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsShowSearch(false);
    router.replace({ pathname: '/', query: { search } });
  }, [router, search]);

  const toggleCartDetail = useCallback(() => {
    setIsShowCartDetail((value) => !value);
  }, []);

  const checkout = useCallback(() => {
    console.log({ carts });
  }, [carts]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(window.localStorage.getItem('cart') ?? '[]');
      setCartCount(cart.length);
      setCarts(cart);
    }
  });

  return {
    data: {
      isShowSearch,
      search,
      cartCount,
      isShowCartDetail,
      carts
    },
    methods: {
      toggleSearch,
      onInputSearch,
      onSubmitSearch,
      toggleCartDetail,
      checkout
    }
  };
};

export default useLayoutHooks;
