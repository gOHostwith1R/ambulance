import React from 'react';
import { SpanErrorStyled } from './span.error.styled';

const SpanError = ({
  children, name, variant, role,
}) => (
  <SpanErrorStyled name={name} variant={variant} role={role}>
    {children}
  </SpanErrorStyled>
);

export default SpanError;
