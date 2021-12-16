import React from 'react';
import { FooterStyled } from './Footer.styled';

export interface FooterProps {
  children?: React.ReactNode | JSX.Element,
}

const Footer: React.FC <FooterProps> = ({ children }) => (
  <FooterStyled>
    {children}
  </FooterStyled>
);

export default Footer;
