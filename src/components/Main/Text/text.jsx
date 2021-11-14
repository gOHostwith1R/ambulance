import React from 'react';
import { TextStyled } from './text.styled';

const Text = ({
  children, title, card, description, titleCard, emptyState, success, multiply,
}) => (
  <TextStyled
    title={title}
    card={card}
    description={description}
    emptyState={emptyState}
    titleCard={titleCard}
    success={success}
    multiply={multiply}
  >
    {children}
  </TextStyled>
);

export default Text;
