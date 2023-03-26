import Filter from '../Filter/Filter';
import styles from './TodosMenu.module.scss';

const TodosMenu = () => {
  return (
    <div className={styles.todosMenu}>
      <div>5 items left</div>
      <Filter />
      <div>Clear Completed</div>
    </div>
  );
};

export default TodosMenu;
