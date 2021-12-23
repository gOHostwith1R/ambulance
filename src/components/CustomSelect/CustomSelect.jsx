import React from 'react';
import Select from 'react-select';
import { customSelectStyled } from './CustomSelect.styled';

export const CustomSelect = ({
  onChange, innerRef, placeholder, options, value,
}) => (
  <Select
    styles={customSelectStyled}
    innerRef={innerRef}
    onChange={onChange}
    placeholder={placeholder}
    options={options}
    value={value}
  />
);
