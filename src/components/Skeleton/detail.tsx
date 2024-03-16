import styles from './Skeleton.module.css';

const SkeletonDetail = () => {
  return (
    <div className={styles.detailContainer}>
      <div>
        <div className={styles.detailThumbnail} />
        <br />
        <div className={styles.detailImagesContainer}>
          <div className={styles.detailImage} />
          <div className={styles.detailImage} />
          <div className={styles.detailImage} />
        </div>
      </div>
      <br />
      <div className={styles.detailTextContainer}>
        <div className={styles.detailText} />
        <div className={styles.detailText} />
        <br />
        <div className={styles.detailText} />
        <br />
        <div className={styles.detailDescription} />
      </div>
    </div>
  );
};

export default SkeletonDetail;
