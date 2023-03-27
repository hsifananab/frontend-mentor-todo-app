import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filters/filtersActions';
import { selectActiveFilter } from '../../store/filters/filtersSelectors';
import styles from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  console.log(activeFilter);

  return (
    <div className={styles.filter}>
      <button
        className={styles.filter__button}
        onClick={() => dispatch(setFilter('all'))}
        style={{ color: activeFilter === 'all' ? '#3A7CFD' : '' }}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        className={styles.filter__button}
        style={{ color: activeFilter === 'active' ? '#3A7CFD' : '' }}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        className={styles.filter__button}
        style={{ color: activeFilter === 'completed' ? '#3A7CFD' : '' }}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
