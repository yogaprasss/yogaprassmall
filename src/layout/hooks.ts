import { useCallback, useState } from 'react';

const useLayoutHooks = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);

  const toggleSearch = useCallback(() => setIsShowSearch((value) => !value), []);

  return {
    data: {
      isShowSearch
    },
    methods: {
      toggleSearch
    }
  };
};

export default useLayoutHooks;
