import React from 'react';
import { CardStyled } from './Card.styled';

export interface CardProps {
  children?: React.ReactNode | JSX.Element,
}

const Card: React.FC <CardProps> = ({ children }) => (
  <CardStyled>
    { children }
  </CardStyled>
);

export default Card;
