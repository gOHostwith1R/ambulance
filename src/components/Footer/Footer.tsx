import React from 'react';
import { FooterStyled } from './Footer.styled';
import { FooterProps } from './types';

export const Footer: React.FC <FooterProps> = ({ children }) => (
  <FooterStyled>
    {children}
  </FooterStyled>
);
