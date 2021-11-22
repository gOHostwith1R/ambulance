import React from 'react';
import { NumberCircleStyled } from './number.circle.styled';

const NumberCircle = ({ children }) => (
  <NumberCircleStyled>
    {children}
  </NumberCircleStyled>
);

export default NumberCircle;
