import simpleStore from './simpleStore';
import { Alert } from 'react-native';

export const saveExpenseListing = async (listing) => {
    try {
        const listingToBeSaved = listing;
        let expenseListings = await simpleStore.getObject(simpleStore.key.expenseListings);

        if (!expenseListings) {
            expenseListings = [];
        }
        expenseListings.push(listingToBeSaved);

        await simpleStore.setObject(simpleStore.key.expenseListings, expenseListings)
            .then(() => {
                console.log('It was saved successfully');
            })
            .catch(() => {
                console.assert(false, 'There was an error saving the listing');
            });
    } catch (e) {
        Alert.alert(e);
    }
};