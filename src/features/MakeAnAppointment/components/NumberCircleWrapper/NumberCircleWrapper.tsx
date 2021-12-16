import React from 'react';
import { NumberCircleWrapperStyled } from './NumberCircleWrapper.styled';

export interface NumberCircleWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const NumberCircleWrapper: React.FC <NumberCircleWrapperProps> = ({ children }) => (
  <NumberCircleWrapperStyled>
    {children}
  </NumberCircleWrapperStyled>
);

export default NumberCircleWrapper;
