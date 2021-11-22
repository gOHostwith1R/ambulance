import React from 'react';
import { LinkToPageStyled } from './link.to.page.styled';

const LinkToPage = ({
  children, variant, margin, display,
}) => (
  <LinkToPageStyled variant={variant} margin={margin} display={display}>
    {children}
  </LinkToPageStyled>
);

export default LinkToPage;
