import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from './style/home.style';
import ExpenseList from './components/expenseList';
import SaveExpenseDetails from '../../actions/expenseAction';

class Home extends Component {

  // navigate to add expense screen
  goToAddExpenseScreen = () => {
    this.props.navigation.navigate('AddExpense');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent barStyle="light-content" />
        <View style={styles.container}>
          <ExpenseList onPress={this.goToAddExpenseScreen} />
          <TouchableOpacity style={styles.button} onPress={this.goToAddExpenseScreen}>
            <Text style={styles.text}>{'ADD EXPENSE'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;