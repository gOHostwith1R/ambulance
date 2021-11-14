import React from 'react';
import { FormStyled } from './form.styled';

const Form = ({ children }) => (
  <FormStyled>
    { children }
  </FormStyled>
);

export default Form;
