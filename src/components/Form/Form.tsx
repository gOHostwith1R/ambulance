import React from 'react';
import { FormStyled } from './Form.styled';
import { FormProps } from './types';

export const Form: React.FC <FormProps> = ({
  children, variant,
}) => (
  <FormStyled variant={variant}>
    { children }
  </FormStyled>
);
