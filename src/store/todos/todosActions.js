import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_TODO,
} from './todosConst';

export const addTodo = title => ({
  type: ADD_TODO,
  title,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export const removeCompletedTodos = {
  type: REMOVE_COMPLETED_TODOS,
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
