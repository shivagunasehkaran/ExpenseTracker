import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home/home';
import AddExpense from '../screens/AddExpense/addExpense';

export const rootStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: ({ tintColor }) => (
                <Text style={{ textAlign: 'center', fontSize: 20, color: tintColor }}>
                    {('Expense Tracker')}
                </Text>
            )
        },
    },
    AddExpense: {
        screen: AddExpense,
        navigationOptions: {
            headerTitle: ({ tintColor }) => (
                <Text style={{ textAlign: 'center', fontSize: 20, color: tintColor }}>
                    {('Add Expense')}
                </Text>
            )
        },
    },
    initialRouteName: 'Home'
});