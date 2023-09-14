import React, { Component, ReactNode } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarState {
  selectedDate: Date | null;
  selectedTime: Date | null;
}

class Calendar extends Component<{}, CalendarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedDate: null,
      selectedTime: null,
    };
  }

  handleDateChange = (date: Date | null) => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = (time: Date | null) => {
    this.setState({ selectedTime: time });
  };

  render(): ReactNode {
    const { selectedDate, selectedTime } = this.state;

    return (
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={this.handleDateChange}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select a date"
        />
        <DatePicker
          selected={selectedTime}
          onChange={this.handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="h:mm aa"
          placeholderText="Select a time"
        />
        {selectedDate && selectedTime && (
          <div className="date-display">
            Date: {selectedDate.toDateString()}, Time: {selectedTime.toLocaleTimeString()}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
