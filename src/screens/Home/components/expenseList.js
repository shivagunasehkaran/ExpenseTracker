import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import ExpenseItem from './expenseItem';
import simpleStore from '../../../utils/simpleStore';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTime: true,
            dataSource: [],
            isSavedData: false
        };
    }

    componentDidMount() {
        if (this.state.isSavedData) {
            this.onRefresh();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSavedData != prevProps.isSavedData) {
            this.onRefresh();
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: '100%',
                backgroundColor: '#0C0D0F',
            }}
            />
        );
    };

    // retrieve data from async storage 
    retrieveData = async () => {
        try {
            const jsonTextExpenseListings = await simpleStore.getItem(simpleStore.key.expenseListings);
            if (jsonTextExpenseListings !== null) {
                let parsedItems = JSON.parse(jsonTextExpenseListings);
                this.setState({
                    dataSource: parsedItems,
                    firstTime: false,
                    isSavedData: true
                });
            }
        } catch (error) {
            Alert.alert(false, error.message);
        }
    };

    // pull to refresh for getting latest saved details
    onRefresh = () => {
        this.retrieveData().then();
    }

    render() {
        const { firstTime, dataSource } = this.state;
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                }
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.container}>
                    <NavigationEvents
                        onWillFocus={() => {
                            this.retrieveData().then();
                        }}
                    />
                    {
                        firstTime && (
                            <TouchableOpacity style={styles.addExpense} onPress={this.props.onPress}>
                                <Text style={styles.text}>{'Add Expense Details'}</Text>
                            </TouchableOpacity>
                        )
                    }
                    {
                        dataSource && (
                            <FlatList
                                data={dataSource}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) =>
                                    <ExpenseItem item={item} />}
                                keyExtractor={item => item.toString()}
                            />
                        )
                    }
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addExpense: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontFamily: 'Avenir-Medium'
    }

});

export default ExpenseList;