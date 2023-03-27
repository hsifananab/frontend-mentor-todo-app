import { useDispatch, useSelector } from 'react-redux';
import { removeCompletedTodos } from '../../store/todos/todosActions';
import { selectActiveTodos } from '../../store/todos/todosSelectors';
import Filter from '../Filter/Filter';
import styles from './TodosMenu.module.scss';

const TodosMenu = () => {
  const dispatch = useDispatch();
  const todosLength = useSelector(selectActiveTodos).length;

  return (
    <div className={styles.todosMenu}>
      <div>{todosLength} items left</div>
      <Filter />
      <div onClick={() => dispatch(removeCompletedTodos)}>Clear Completed</div>
    </div>
  );
};

export default TodosMenu;
