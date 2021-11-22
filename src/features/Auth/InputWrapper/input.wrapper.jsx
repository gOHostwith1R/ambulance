import React from 'react';
import { InputWrapperStyled } from './input.wrapper.styled';

const InputWrapper = ({ children, visiblePassword }) => (
  <InputWrapperStyled visiblePassword={visiblePassword}>
    { children }
  </InputWrapperStyled>
);

export default InputWrapper;
