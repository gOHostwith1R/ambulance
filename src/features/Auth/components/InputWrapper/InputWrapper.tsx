import React from 'react';
import { InputWrapperStyled } from './InputWrapper.styled';
import { InputWrapperProps } from './types';

const InputWrapper: React.FC <InputWrapperProps> = ({ children }) => (
  <InputWrapperStyled>
    { children }
  </InputWrapperStyled>
);

export default InputWrapper;
