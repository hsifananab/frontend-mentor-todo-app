import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <button className={styles.filter__button} style={{ color: '#3A7CFD' }}>
        All
      </button>
      <button className={styles.filter__button}>Active</button>
      <button className={styles.filter__button}>Completed</button>
    </div>
  );
};

export default Filter;
