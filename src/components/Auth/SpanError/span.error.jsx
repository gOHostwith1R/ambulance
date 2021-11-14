import React from 'react';
import { SpanErrorStyled } from './span.error.styled';

const SpanError = ({ children, name }) => (
  <SpanErrorStyled name={name}>
    {children}
  </SpanErrorStyled>
);

export default SpanError;
