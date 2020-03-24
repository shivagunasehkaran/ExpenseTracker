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
import DatePickerView from '../AddExpense/components/datePicker';

class AddExpense extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      category: '',
      amount: '',
      date: "24-05-2020",
      isDescriptionEmpty: false,
      isCategoryEmpty: false,
      isAmountEmpty: false,
      isDateEmpty: false,
      expenseData: []
    };
  }

  // validation of text inputs
  isValid = () => {
    const { description, category, amount, date } = this.state;

    if (description.length === 0) {
      this.setState({
        isDescriptionEmpty: true,
      });
    } else {
      this.setState({ isDescriptionEmpty: false });
    }

    if (category.length === 0) {
      this.setState({
        isCategoryEmpty: true,
      });
    } else {
      this.setState({ isCategoryEmpty: false });
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
      description.length > 0 &&
      category.length > 0 &&
      amount.length > 0
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
      const { description, category, amount, date } = this.state;

      // construct expense obj
      let listing = {
        description: description,
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
            <Text style={styles.titleText}>{'Description'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter a description "
              onChangeText={description => this.setState({ description, isDescriptionEmpty: false })}
            />
            <Text style={styles.titleText}>{'Categories'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter category "
              onChangeText={category => this.setState({ category, isCategoryEmpty: false })}
            />
            <Text style={styles.titleText}>{'Date'} :</Text>
            <DatePickerView
              date={this.state.date}
              onChangeDateHandler={(value) => this.setState({ date: value })}
            />
            <Text style={styles.titleText}>{'Amount'} :</Text>
            <TextInput
              style={styles.textContainer}
              placeholder="Enter amount "
              keyboardType={'number-pad'}
              onChangeText={amount => this.setState({ amount, isAmountEmpty: false })}
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
