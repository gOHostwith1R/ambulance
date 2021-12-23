import React from 'react';
import { TitleStyled } from './Title.styled';
import { TitleProps } from './types';

export const Title: React.FC <TitleProps> = ({
  children, variant, level = 1, color,
}) => (
  <TitleStyled variant={variant} level={level} as={`h${level}` as const} color={color}>
    {children}
  </TitleStyled>
);
