import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import { styles } from '../style/addExpense.style';

class DatePickerView extends Component {
    render() {
        return (
            <>
                <DatePicker
                    style={styles.datePicker}
                    date={this.props.date}
                    mode="date"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(value) => this.props.onChangeDateHandler(value)}
                />
            </>
        );
    }
};

export default DatePickerView;
