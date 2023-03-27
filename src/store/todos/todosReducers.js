import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_TODO,
} from './todosConst';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case REMOVE_COMPLETED_TODOS:
      return state.filter(todo => !todo.completed);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};
