import React, { forwardRef } from 'react';
import { InputStyled } from './input.styled';
// import { InputStyled } from './input.styled';

const Input = forwardRef((props, ref) => <InputStyled ref={ref} {...props} />);

export default Input;
