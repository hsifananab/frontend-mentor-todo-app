import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/todos/todosActions';
import styles from './TodoItem.module.scss';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        className={styles.checkbox}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <label
        htmlFor={todo.id}
        className={styles.checkbox__label}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'var(--color-text-disabled)' : 'inherit',
        }}
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoItem;
