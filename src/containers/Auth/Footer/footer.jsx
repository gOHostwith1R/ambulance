import React from 'react';
import { FooterStyled } from './footer.styled';

const Footer = ({ children }) => (
  <FooterStyled>
    {children}
  </FooterStyled>
);

export default Footer;
