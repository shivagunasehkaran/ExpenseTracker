// redux specific imports
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

let middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, compose(middleware))

export {
    store
};
