import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import logMiddleware from '../middlewares/logMiddleware';

// TODO pour pré-configurer votre store à l'initialisation du store 
const initPreloadedState = {
 
};

const configureStore = (preloadedState = initPreloadedState) => {
  const middlewares = [thunkMiddleware, logMiddleware];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
