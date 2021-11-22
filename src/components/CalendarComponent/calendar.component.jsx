import React from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const CalendarComponent = ({ onChange, selected }) => (
  <Calendar
    onChange={onChange}
    value={selected}
    minDate={new Date()}
    formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
  />
);

export default CalendarComponent;
