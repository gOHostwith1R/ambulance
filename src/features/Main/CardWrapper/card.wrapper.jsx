import React from 'react';
import { CardWrapperStyled } from './card.wrapper.styled';

const CardWrapper = ({ children }) => (
  <CardWrapperStyled>
    {children}
  </CardWrapperStyled>
);

export default CardWrapper;
