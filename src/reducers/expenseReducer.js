// packages
import * as Actions from '../actions/types';
import { saveExpenseListing } from '../utils/storage';

const initialState = {
    expenseDetails: []
};

const expenseReducer = async (state = initialState, action) => {
    switch (action.type) {
        case Actions.SAVE_EXPENSE_DETAILS:
            // save expense details in AsyncStorage
            if (action.payload) {
                await saveExpenseListing(action.payload)
                    .then(() => {
                        console.log('It was saved successfully');
                    })
                    .catch(() => {
                        console.assert(false, 'There was an error saving the listing');
                    });
            }
            return {
                ...state,
                expenseDetails: action.payload
            };
        default:
            return state;
    }
};

export default expenseReducer;
