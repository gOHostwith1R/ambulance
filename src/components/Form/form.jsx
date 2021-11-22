import React from 'react';
import { FormStyled } from './form.styled';

const Form = ({
  children, width, overflow, onSubmit,
}) => (
  <FormStyled width={width} overflow={overflow} onSubmit={onSubmit}>
    { children }
  </FormStyled>
);

export default Form;
