import React from 'react';
import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
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
