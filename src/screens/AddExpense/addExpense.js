import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { styles } from './style/addExpense.style';
import { saveExpenseDetails } from '../../actions/expenseAction';

class AddExpense extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      amount: '',
      date: '',
      isCategoryEmpty: false,
      isAmountEmpty: false,
      isDateEmpty: false,
      expenseData: []
    };
  }

  // validation of text inputs
  isValid = () => {
    const { category, amount, date } = this.state;

    if (category.length === 0) {
      this.setState({
        isCategoryEmpty: true,
      });
    } else {
      this.setState({ isMessageEmpty: false });
    }

    if (amount.length === 0) {
      this.setState({
        isAmountEmpty: true,
      });
    } else {
      this.setState({ isAmountEmpty: false });
    }

    if (date.length === 0) {
      this.setState({
        isDateEmpty: true,
      });
    } else {
      this.setState({ isDateEmpty: false });
    }

    return (
      category.length > 0 &&
      amount.length > 0 &&
      date.length > 0
    );
  };

  // Update values into async storage
  _storeValues = (listing) => {
    if (listing) {
      this.props.saveExpenseDetails(listing);
    } else {
      Alert.alert("No values!");
    }
  };

  // Create expenses and navigate to prevoius screen  
  _onCreateExpense = () => {
    if (this.isValid()) {
      const { category, amount, date } = this.state;

      // construct expense obj
      let listing = {
        category: category,
        amount: amount,
        date: date
      };

      // update values into store
      this._storeValues(listing);

      // navigate to home 
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert("Fill out all the fields");
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.titleText}>{'Catogories'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter category "
              onChangeText={category => this.setState({ category, isCategoryEmpty: false })}
            />
            <Text style={styles.titleText}>{'Amount'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter amount "
              onChangeText={amount => this.setState({ amount, isAmountEmpty: false })}
            />
            <Text style={styles.titleText}>{'Date'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter date "
              onChangeText={date => this.setState({ date, isAmountEmpty: false })}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this._onCreateExpense}>
            <Text style={styles.submitText}>{'CREATE EXPENSE'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveExpenseDetails: (listing) => { dispatch(saveExpenseDetails(listing)) }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddExpense);
