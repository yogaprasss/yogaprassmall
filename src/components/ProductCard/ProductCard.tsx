import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

import { FC, useMemo } from 'react';
import { formatRupiah } from '@/utils/converter';

import type { ProductProps } from '@/utils/types';

const ProductCard: FC<ProductProps> = ({ id, title, main_price, special_price, images }) => {
  const discount = useMemo(() => {
    return Math.ceil(100 - (((special_price ?? 0) / main_price) * 100));
  }, [main_price, special_price]);

  return (
    <Link className={styles.product} href={`/product/${id}`}>
      <Image src={images[0]} alt='product-img' width={200} height={200} className={styles.image} />
      <div className={styles.container}>
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
  );
};

export default ProductCard;
