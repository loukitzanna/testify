import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;

