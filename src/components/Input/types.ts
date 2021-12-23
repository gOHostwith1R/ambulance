import { RefCallBack } from 'react-hook-form/dist/types';

export interface InputProps {
  icon?: string,
  inputRef: RefCallBack
  type?: string
  placeholder: string,
  variant?: string,
  onChange: (...event: string[]) => void;
}

export interface InputStyledProps {
  icon?: string,
  variant?: string,
  inputRef: RefCallBack
}
