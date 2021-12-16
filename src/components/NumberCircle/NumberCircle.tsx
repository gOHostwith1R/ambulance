import React from 'react';
import { NumberCircleStyled } from './NumberCircle.styled';
import { NumberCircleProps } from './types';

export const NumberCircle: React.FC <NumberCircleProps> = ({ children }) => (
  <NumberCircleStyled>
    {children}
  </NumberCircleStyled>
);
