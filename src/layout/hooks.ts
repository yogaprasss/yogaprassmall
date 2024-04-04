import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import type { ChangeEvent, FormEvent } from 'react';

const useLayoutHooks = () => {
  const router = useRouter();

  const [isShowSearch, setIsShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const toggleSearch = useCallback(() => setIsShowSearch((value) => !value), []);

  const onInputSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const onSubmitSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsShowSearch(false);
    router.replace({ pathname: '/', query: { search } });
  }, [router, search]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(window.localStorage.getItem('cart') ?? '[]');
      console.log({ cart });
    }
  });

  return {
    data: {
      isShowSearch,
      search
    },
    methods: {
      toggleSearch,
      onInputSearch,
      onSubmitSearch
    }
  };
};

export default useLayoutHooks;
