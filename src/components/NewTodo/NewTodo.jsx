import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos/todosActions';
import styles from './NewTodo.module.scss';

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        type="text"
        name="title"
        placeholder="Create a new todo…"
      />
    </form>
  );
};

export default NewTodo;
