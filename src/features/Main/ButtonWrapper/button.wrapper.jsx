import React from 'react';
import { ButtonWrapperStyled } from './button.wrapper.styled';

const ButtonWrapper = ({ children }) => (
  <ButtonWrapperStyled>
    {children}
  </ButtonWrapperStyled>
);

export default ButtonWrapper;
