import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

import { FC, useCallback, useMemo } from 'react';
import { formatRupiah } from '@/utils/converter';

import type { ProductProps } from '@/utils/types';

interface ProductCardProps extends ProductProps {
  onAddToCart: (product: ProductProps) => void;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  description,
  main_price,
  special_price,
  images,
  onAddToCart
}) => {
  const discount = useMemo(() => {
    return Math.ceil(100 - (((special_price ?? 0) / main_price) * 100));
  }, [main_price, special_price]);

  const addToCart = useCallback(() => {
    onAddToCart({ id, title, description, main_price, special_price, images });
  }, [id, title, description, main_price, special_price, images, onAddToCart]);

  return (
    <div className={styles.container}>
      <Link className={styles.product} href={`/product/${id}`}>
        <Image src={images[0]} alt='product-img' width={200} height={200} className={styles.image} priority />
        <div className={styles.infoContainer}>
          <p className={styles.title}>{title}</p>
          <div>
            {special_price && (
              <div className={styles.originalPriceContainer}>
                <p className={styles.originalPrice}>{formatRupiah(main_price)}</p>
                <p className={styles.discount}>-{discount}%</p>
              </div>
            )}
            <p className={styles.price}>{formatRupiah(special_price ?? main_price)}</p>
          </div>
        </div>
      </Link>
      <button onClick={addToCart} className={styles.buttonAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
