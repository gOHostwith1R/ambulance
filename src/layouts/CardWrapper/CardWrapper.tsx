import React from 'react';
import { CardWrapperStyled } from './CardWrapper.styled';

export interface CardWrapperProps {
  children: JSX.Element,
}

const CardWrapper: React.FC <CardWrapperProps> = ({ children }) => (
  <CardWrapperStyled>
    {children}
  </CardWrapperStyled>
);

export default CardWrapper;
