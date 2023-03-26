import React from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import TodoItem from '../TodoItem/TodoItem';
import TodosMenu from '../TodosMenu/TodosMenu';
import styles from './TodoList.module.scss';

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn Redux', completed: false },
    { id: 2, title: 'Learn Toolkit', completed: false },
    { id: 3, title: 'Learn Typescript', completed: false },
  ];

  return (
    <div className={styles.todos}>
      <ul className={styles.todos__list}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todos__item}>
            <TodoItem todo={todo} />
            <DeleteBtn />
          </li>
        ))}
      </ul>
      <TodosMenu />
    </div>
  );
};

export default TodoList;
