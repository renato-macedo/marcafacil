import React, { Component } from "react";
import { Button} from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";
import { yyyymmdd } from "../Auxiliar/yyyymmdd";

export default class TimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    date = yyyymmdd(date)
    console.log("A date has been picked:w", date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <>
        <Button mode= "contained" onPress={this.showDateTimePicker}>Escolher Horario</Button>
        <DateTimePicker
            mode="time"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
        />
      </>
    );
  }
}


