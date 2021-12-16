import React from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import { CalendarComponentProps } from './types';

export const CalendarComponent:React.FC <CalendarComponentProps> = ({ onChange, selected }) => (
  <Calendar
    onChange={onChange}
    value={selected}
    minDate={new Date()}
    formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
  />
);
