import React from 'react';
import { LinkToPageStyled } from './LinkToPage.styled';
import { LinkToPageProps } from './types';

export const LinkToPage: React.FC <LinkToPageProps> = ({
  children, variant, type = '',
}) => (
  <LinkToPageStyled variant={variant} type={type}>
    {children}
  </LinkToPageStyled>
);
