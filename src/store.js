import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middlewares)),
    );
export const persistor = persistStore(store);
