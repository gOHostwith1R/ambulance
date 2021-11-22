import React, { forwardRef } from 'react';
import Select from 'react-select';
import { customSelectStyled } from './custom.select.styled';

const CustomSelect = forwardRef((props, ref) => (
  <Select
    ref={ref}
    {...props}
    styles={customSelectStyled}
  />
));

export default CustomSelect;
