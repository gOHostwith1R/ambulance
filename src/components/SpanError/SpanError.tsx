import React from 'react';
import { SpanErrorStyled } from './SpanError.styled';
import { SpanErrorProps } from './types';

export const SpanError: React.FC <SpanErrorProps> = ({
  children, variant, role = '',
}) => (
  <SpanErrorStyled variant={variant} role={role}>
    {children}
  </SpanErrorStyled>
);
