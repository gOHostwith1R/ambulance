import React from 'react';
import { InputWrapperStyled } from './InputWrapper.styled';

export interface InputWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const InputWrapper: React.FC <InputWrapperProps> = ({ children }) => (
  <InputWrapperStyled>
    {children}
  </InputWrapperStyled>
);

export default InputWrapper;
