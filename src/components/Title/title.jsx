import React from 'react';
import { TitleStyled } from './title.styled';

const Title = ({ children, variant, margin }) => (
  <TitleStyled variant={variant} margin={margin}>
    {children}
  </TitleStyled>
);

export default Title;
