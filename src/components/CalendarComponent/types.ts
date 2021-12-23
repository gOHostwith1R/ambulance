import { OnChangeDateCallback } from 'react-calendar';
import { RefCallBack } from 'react-hook-form/dist/types';

export interface CalendarComponentProps {
  onChange: OnChangeDateCallback
  selected: Date
  inputRef: RefCallBack
}
