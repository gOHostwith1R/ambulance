import React from 'react';
import Calendar, { OnChangeDateCallback } from 'react-calendar';
import './calendar.css';

export interface CalendarComponentProps {
  onChange: OnChangeDateCallback
  selected: Date
}

const CalendarComponent:React.FC <CalendarComponentProps> = ({ onChange, selected }) => (
  <Calendar
    onChange={onChange}
    value={selected}
    minDate={new Date()}
    formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
  />
);

export default CalendarComponent;
