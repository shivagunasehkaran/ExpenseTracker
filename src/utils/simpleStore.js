import AsyncStorage from '@react-native-community/async-storage';

const key = {
    expenseListings: '@storage:expenseListings',
};

const getItem = async (name) => {
    try {
        return await AsyncStorage.getItem(name);
    } catch (error) {
        console.log(error);
        return null;
    }
};

const setItem = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value);
    } catch (error) {
        console.log(error);
    }
};

const removeItem = async (name) => {
    try {
        await AsyncStorage.removeItem(name);
    } catch (error) {
        console.log(error);
    }
};

const getObject = async (key) => {
    const value = await getItem(key);

    return JSON.parse(value);
};

const setObject = async (key, value) => {
    await setItem(key, JSON.stringify(value));
};

const simpleStore = {
    getItem,
    setItem,
    removeItem,
    getObject,
    setObject,
    key,
};

export default simpleStore;