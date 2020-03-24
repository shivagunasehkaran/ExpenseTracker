import expenseReducer from './expenseReducer';
import { combineReducers } from 'redux';

// all other reducers should be combined in this root reducer
const appReducer = combineReducers({
    expense: expenseReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;