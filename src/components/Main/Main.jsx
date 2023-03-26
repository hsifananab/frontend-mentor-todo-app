import React from 'react';
import NewTodo from '../NewTodo/NewTodo';
import TodoList from '../TodoList/TodoList';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <NewTodo />
      <TodoList />
    </div>
  );
};

export default Main;
