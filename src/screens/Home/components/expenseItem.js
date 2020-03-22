import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {
    static propTypes = {
        onPress: PropTypes.func,
    };

    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>{item.heading}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.amount}>{'90 RM'}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.category}>{item.categories}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        height: 100,
        shadowColor: '#000',
        borderColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        margin: 15,
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'Avenir-Medium',
    },
    amount: {
        fontSize: 23,
        textAlign: 'right',
        fontWeight: 'bold',
        fontFamily: 'Avenir-Medium',
    },
    category: {
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
    },
    date: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'right',
        fontFamily: 'Avenir-Medium',
    },
});

export default ExpenseItem;
