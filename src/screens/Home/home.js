import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import { styles } from './home.style';
import ExpenseList from './components/expenseList';

class Home extends Component {

  goToAddExpenseScreen = () => {
    this.props.navigation.navigate('AddExpense');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent barStyle="light-content" />
        <View style={styles.container}>
          <ExpenseList />
          <TouchableOpacity style={styles.button} onPress={this.goToAddExpenseScreen}>
            <Text style={styles.text}>{'ADD EXPENSE'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;