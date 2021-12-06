import React from 'react';
import { ButtonStyled } from './button.styled';

const Button = ({
  children, variant, color, group, endIcon, pos, startIcon, display, style, disabled, type,
}) => (
  <ButtonStyled
    variant={variant}
    color={color}
    group={group}
    endIcon={endIcon}
    pos={pos}
    startIcon={startIcon}
    display={display}
    style={style}
    disabled={disabled}
    type={type}
  >
    {children}
  </ButtonStyled>
);

export default Button;
