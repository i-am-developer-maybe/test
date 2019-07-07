import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

export default store;
