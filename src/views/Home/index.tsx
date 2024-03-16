import useListProductHooks from './hooks';
import styles from './Home.module.css';
import Layout from '@/layout';
import ProductCard from '@/components/ProductCard/ProductCard';

const Home = () => {
  const { data: { products } } = useListProductHooks();
  return (
    <Layout>
      <div className={styles.list}>
        {products.map((item, index) => (
          <ProductCard key={`product-${index + 1}`} {...item} />
        ))}
      </div>
    </Layout>
  )
};

export default Home;
