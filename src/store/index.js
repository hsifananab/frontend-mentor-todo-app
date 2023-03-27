import throttle from 'lodash.throttle';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import { rootReducer } from './rootReducer';

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      const { todos, theme } = store.getState();
      saveState({ todos, theme });
    }, 1000)
  );

  return store;
};
