import React from 'react';
import { ButtonStyled } from './button.styled';

const Button = ({ children, type }) => (
  <ButtonStyled type={type}>
    { children }
  </ButtonStyled>
);

export default Button;
