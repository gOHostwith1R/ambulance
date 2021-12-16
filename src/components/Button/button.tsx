import React from 'react';
import { ButtonStyled } from './button.styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children, color, group, disabled = false, startIcon = '',
}) => (
  <ButtonStyled
    color={color}
    group={group}
    disabled={disabled}
    startIcon={startIcon}
  >
    {children}
  </ButtonStyled>
);

export default Button;
