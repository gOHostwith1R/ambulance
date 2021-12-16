import React, { forwardRef } from 'react';
import Select from 'react-select';
import { customSelectStyled } from './CustomSelect.styled';

export const CustomSelect = forwardRef((props, ref) => (
  <Select
    ref={ref}
    {...props}
    styles={customSelectStyled}
  />
));
