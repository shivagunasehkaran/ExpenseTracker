import { SAVE_EXPENSE_DETAILS } from './types';

export const saveExpenseDetails = (listing) => {
    return {
        type: SAVE_EXPENSE_DETAILS,
        payload: listing
    }
};