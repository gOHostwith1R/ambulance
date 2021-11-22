import React from 'react';
import { CardStyled } from './card.styled';

const Card = ({ children }) => (
  <CardStyled>
    { children }
  </CardStyled>
);

export default Card;
