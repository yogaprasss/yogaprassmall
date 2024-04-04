import Image from 'next/image';
import xss from 'xss';
import useDetailProductHooks from './hooks';
import styles from './Product.module.css';
import Layout from '@/layout';
import Skeleton from '@/components/Skeleton/detail';

import { formatRupiah } from '@/utils/converter';

const ProductView = () => {
  const {
    data: { product, selectedImage, discount, isLoading },
    methods: { onSelectImage }
  } = useDetailProductHooks();
  return (
    <Layout>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className={styles.container}>
          <div>
            <Image
              src={selectedImage ?? ''}
              alt='thumbnail'
              width={640}
              height={640}
              className={styles.thumbnail}
              priority
            />
            <div className={styles.imagesContainer}>
              {product?.images?.map((img, index) => {
                const isActive = selectedImage === img;
                return (
                  <div
                    key={`img-${index + 1}`}
                    className={isActive ? styles.activeImage : styles.inactiveImage}
                  >
                    <Image
                      src={img}
                      alt={`img-${index + 1}`}
                      width={100}
                      height={100}
                      className={styles.image}
                      onClick={onSelectImage(img)}
                      priority
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{product?.title}</h1>
            <br />
            <div className={styles.priceContainer}>
              <div>
                {product?.special_price && (
                  <p className={styles.originalPrice}>{formatRupiah(product?.main_price)}</p>
                )}
                <p className={styles.price}>
                  {formatRupiah(product?.special_price ?? product?.main_price ?? 0)}
                </p>
              </div>
              {discount > 0 && <div className={styles.discount}>-{discount}%</div>}
            </div>
            <br />
            <br />
            <h3>Deskripsi Produk</h3>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: xss(product?.description?.replaceAll('\n', '<br />') ?? '')
              }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductView;
