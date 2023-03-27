import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTodos } from '../../../../../../redux/todo-app/src/store/todos/todos-selectors';
import { selectActiveFilter } from '../../store/filters/filtersSelectors';
import { toggleTodo } from '../../store/todos/todosActions';
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
    </div>
  );
};

export default TodoList;
