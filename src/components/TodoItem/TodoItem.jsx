import styles from './TodoItem.module.scss';

const TodoItem = ({ todo }) => {
  return (
    <div className={styles.todoItem}>
      <input type="checkbox" id="custom-checkbox" className={styles.checkbox} />
      <label
        htmlFor="custom-checkbox"
        className={styles.checkbox__label}
      ></label>
      {todo.title}
    </div>
  );
};

export default TodoItem;
