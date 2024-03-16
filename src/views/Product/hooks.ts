import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import type { ProductProps } from '@/utils/types';

const useDetailProductHooks = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [selectedImage, setSelectedImage] = useState('');

  const fetchProduct = useCallback(async () => {
    if (router.query.id) {
      setIsLoading(true);
      await fetch(`/api/product/${router.query.id}`)
        .then((res) => res.json() as unknown as ProductProps)
        .then((data) => {
          setSelectedImage(data?.images?.[0]);
          setProduct(data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [router.query.id]);

  const discount = useMemo(() => {
    if (product?.special_price && product?.main_price) {
      return Math.ceil(100 - (((product?.special_price ?? 0) / product?.main_price) * 100));
    }
    return 0;
  }, [product?.main_price, product?.special_price]);

  const onSelectImage = useCallback((url: string) => () => {
    setSelectedImage(url);
  }, []);

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);

  return {
    data: {
      product,
      selectedImage,
      discount,
      isLoading
    },
    methods: {
      onSelectImage
    }
  };
};

export default useDetailProductHooks;
