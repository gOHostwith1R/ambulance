import { OnChangeDateCallback } from 'react-calendar';

export interface CalendarComponentProps {
  onChange: OnChangeDateCallback
  selected: Date
}
