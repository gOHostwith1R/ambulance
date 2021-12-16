import { RefCallBack } from 'react-hook-form/dist/types';

export interface InputProps {
  icon?: string,
  inputRef: RefCallBack
  type?: string
  placeholder: string,
  onChange: (...event: any[]) => void;
}

export interface InputStyledProps {
  icon?: string,
  inputRef: RefCallBack
}
