import React from 'react';
import { TitleStyled } from './title.styled';

const Title = ({
  children, variant, margin, level = 1,
}) => (
  <TitleStyled variant={variant} margin={margin} level={level} as={`h${level}`}>
    {children}
  </TitleStyled>
);

export default Title;
