import React from 'react';
import { LinkToPageStyled } from './LinkToPage.styled';
import { LinkToPageProps } from './types';

const LinkToPage: React.FC <LinkToPageProps> = ({
  children, variant, type = '',
}) => (
  <LinkToPageStyled variant={variant} type={type}>
    {children}
  </LinkToPageStyled>
);

export default LinkToPage;
