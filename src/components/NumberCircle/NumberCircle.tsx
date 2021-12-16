import React from 'react';
import { NumberCircleStyled } from './NumberCircle.styled';

export interface NumberCircleProps {
  children: JSX.Element | string,
}

const NumberCircle: React.FC <NumberCircleProps> = ({ children }) => (
  <NumberCircleStyled>
    {children}
  </NumberCircleStyled>
);

export default NumberCircle;
