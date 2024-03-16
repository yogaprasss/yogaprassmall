import useListProductHooks from './hooks';
import styles from './Home.module.css';
import Layout from '@/layout';
import ProductCard from '@/components/ProductCard/ProductCard';

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
          <div>Loading</div>
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
