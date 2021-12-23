import React from 'react';
import { InputStyled } from './Input.styled';
import { InputProps } from './types';

export const Input: React.FC <React.InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  icon, placeholder, type, inputRef, onChange, variant,
}) => (
  <InputStyled
    icon={icon}
    placeholder={placeholder}
    type={type}
    inputRef={inputRef}
    onChange={onChange}
    variant={variant}
  />
);
