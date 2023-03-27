import { combineReducers } from 'redux';
import { todos } from './todos/todosReducers';
import { filters } from './filters/filtersReducers';
import { theme } from './theme/themeReducers';

export const rootReducer = combineReducers({
  todos,
  filters,
  theme,
});
