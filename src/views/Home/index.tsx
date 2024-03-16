import useListProductHooks from './hooks';
import styles from './Home.module.css';
import Layout from '@/layout';
import ProductCard from '@/components/ProductCard/ProductCard';
import Skeleton from '@/components/Skeleton/list';

const Home = () => {
  const {
    data: { products, isLoading, searchKey },
    methods: { resetFilter }
  } = useListProductHooks();

  return (
    <Layout>
      {!isLoading && searchKey && (
        <>
        <p>Hasil pencarian untuk <strong>{searchKey}</strong></p>
        <br />
        <button className={styles.resetButton} onClick={resetFilter}>Reset</button>
        <br />
        <br />
        </>
      )}
      <div className={styles.list}>
        {isLoading ? (
          <>
            {new Array(10).fill('').map((_, index) => (
              <Skeleton key={`skeleton-${index + 1}`} />
            ))}
          </>
        ) : (
          <>
            {products.map((item, index) => (
              <ProductCard key={`product-${index + 1}`} {...item} />
            ))}
          </>
        )}
      </div>
    </Layout>
  )
};

export default Home;
