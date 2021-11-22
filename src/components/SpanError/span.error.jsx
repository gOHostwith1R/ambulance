import React from 'react';
import { SpanErrorStyled } from './span.error.styled';

const SpanError = ({
  children, name, variant,
}) => (
  <SpanErrorStyled name={name} variant={variant}>
    {children}
  </SpanErrorStyled>
);

export default SpanError;
