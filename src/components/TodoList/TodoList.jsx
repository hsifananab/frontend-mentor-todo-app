import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveFilter } from '../../store/filters/filtersSelectors';
import { selectVisibleTodos } from '../../store/todos/todosSelectors';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import TodoItem from '../TodoItem/TodoItem';
import TodosMenu from '../TodosMenu/TodosMenu';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector(state => selectVisibleTodos(state, activeFilter));

  return (
    <div className={styles.todos}>
      <ul className={styles.todos__list}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todos__item}>
            <TodoItem todo={todo} />
            <DeleteBtn id={todo.id} />
          </li>
        ))}
      </ul>
      <TodosMenu />
      <div className={styles.test}></div>
    </div>
  );
};

export default TodoList;
