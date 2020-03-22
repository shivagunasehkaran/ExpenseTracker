import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import ExpenseItem from './expenseItem';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        const data = {
            "expenseDetails": [
                {
                    "id": 1,
                    "heading": "99 Mart",
                    "date": "Feb 06",
                    "categories": "Snacks",
                    "imageURL": "https://www.getneighborly.com/cms/thumbnails/00/640x320/images/blog/NBR-CS_OUW_InsulatingOldHome_BlogHero_January_20191212.jpg",
                },
                {
                    "id": 2,
                    "heading": "KK Mart",
                    "date": "Mar 06",
                    "categories": "Groceries",
                }
            ]
        };

        this.setState({
            loading: false,
            dataSource: data,
        });
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

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource.expenseDetails}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>
                        <ExpenseItem item={item} />}
                    keyExtractor={item => item.toString()}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerList: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: '#000000',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
});

export default ExpenseList;