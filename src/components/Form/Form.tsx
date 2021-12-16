import React from 'react';
import { FormStyled } from './Form.styled';
import { FormProps } from './types';

const Form: React.FC <FormProps> = ({
  children, variant,
}) => (
  <FormStyled variant={variant}>
    { children }
  </FormStyled>
);

export default Form;
