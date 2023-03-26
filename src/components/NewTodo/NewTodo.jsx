import styles from './NewTodo.module.scss';

const NewTodo = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.form__input}
        type="text"
        placeholder="Create a new todo…"
      />
    </form>
  );
};

export default NewTodo;
