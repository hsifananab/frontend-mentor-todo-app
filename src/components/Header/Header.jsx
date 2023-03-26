import { useState, useEffect } from 'react';
import NewTodo from '../NewTodo/NewTodo';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>TODO</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
